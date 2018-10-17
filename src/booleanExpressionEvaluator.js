/**
 * Basic tokenizer for boolean expressions
 */
class Tokenizer {
  constructor(code) {
    if (typeof code !== 'string') {
      throw new Error('Can only tokenize strings.');
    }

    this.code = code;
    this.current = 0;
    this.start = 0;
    this.tokens = [];
  }

  tokenize() {
    while (!this.isAtEnd()) {
      const char = this.peek();
      this.start = this.current;

      switch (char) {
        case "&":
          this.advance();
          this.addToken("AND");
          break;
        case "|":
          this.advance();
          this.addToken("OR");
          break;
        case "!":
          this.advance();
          this.addToken("NOT");
          break;
        case "^":
          this.advance();
          this.addToken("XOR");
          break;
        default:
          // If it's a literal, consume it entirely
          if (isAlpha(char)) {
            this.literal();
            break;
          }

          // Ignore whitespaces
          if (isWhitespace(char)) {
            this.advance();
            break;
          }

          throw new Error(`Unrecognized character: ${this.peek()}`);
      }
    }

    return this.tokens;
  }

  literal() {
    // Consume all alpha characters
    while (isAlpha(this.peek()) && !this.isAtEnd()) {
      this.advance();
    }

    this.addToken("LITERAL");
  }

  isAtEnd() {
    return this.current >= this.code.length;
  }

  peek() {
    return this.code[this.current];
  }

  advance() {
    this.current++;
  }

  addToken(type) {
    this.tokens.push({
      type,
      lexeme: this.code.substring(this.start, this.current)
    });
  }
}

/**
 * Returns whether a character is a letter or not. It is not performant,
 * and in a real-world scenario, should be done differently, using ASCII
 * char code for example.
 * @param {String} char
 */
function isAlpha(char) {
  return /[a-z]/.test(char);
}

/**
 * Returns whether a character is a whitespace or not. It is not performant,
 * and in a real-world scenario, should be done differently, using ASCII
 * char code for example.
 * @param {String} char
 */
function isWhitespace(char) {
  return /\s/.test(char);
}

/**
 * Basic parser for boolean expressions, using the following grammar:
 *  expression -> logic_or ;
 *  logic_or -> logic_and ( '|' logic_and )* ;
 *  logic_and -> logic_xor ( '&' logic_xor )* ;
 *  logic_xor -> literal ( '^' literal )* ;
 *  logic_not -> '!'? literal ;
 *  literal -> 'true' | 'false' ;
 */
class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.current = 0;
  }

  parse() {
    return this.logicOr();
  }

  logicOr() {
    let expr = this.logicAnd();

    while (this.match("OR")) {
      const operator = this.previous();
      const right = this.logicAnd();
      expr = BinaryExpression(expr, operator, right);
    }

    return expr;
  }

  logicAnd() {
    let expr = this.logicXor();

    while (this.match("AND")) {
      const operator = this.previous();
      const right = this.logicXor();
      expr = BinaryExpression(expr, operator, right);
    }

    return expr;
  }

  logicXor() {
    let expr = this.logicNot();

    while (this.match("XOR")) {
      const operator = this.previous();
      const right = this.logicNot();
      expr = BinaryExpression(expr, operator, right);
    }

    return expr;
  }

  logicNot() {
    if (this.match("NOT")) {
      const operator = this.previous();
      const right = this.literal();
      return UnaryExpression(operator, right);
    }

    return this.literal();
  }

  literal() {
    if (!this.match('LITERAL')) {
      throw new Error('Expected token of type: LITERAL');
    }

    const token = this.previous();
    const lexeme = token.lexeme;
    switch (lexeme) {
      case 'true':
        return LiteralExpression(true);
      case 'false':
        return LiteralExpression(false);
      default:
        throw new Error(`Invalid literal value: ${lexeme}`);
    }
  }

  previous() {
    return this.tokens[this.current - 1];
  }

  match(type) {
    const token = this.tokens[this.current];

    if (token && token.type === type) {
      this.advance();
      return true;
    }

    return false;
  }

  advance() {
    this.current++;
  }
}

/**
 * Builds a binary expression payload
 * @param {expression} left
 * @param {token} operator
 * @param {expression} right
 */
function BinaryExpression(left, operator, right) {
  return {
    type: 'BINARY',
    left,
    operator,
    right
  };
}

/**
 * Builds a unary expression payload
 * @param {token} operator
 * @param {expression} right
 */
function UnaryExpression(operator, right) {
  return {
    type: 'UNARY',
    operator,
    right
  };
}

/**
 * Builds a literal expression payload
 * @param {any} value
 */
function LiteralExpression(value) {
  return {
    type: 'LITERAL',
    value,
  };
}

/**
 * Prints an AST in nested parens
 * @param {node} node
 */
function stringifyAST(node) {
  const type = node.type;
  if (type === 'BINARY') {
    const left = stringifyAST(node.left);
    const right = stringifyAST(node.right);
    return `(${left} ${node.operator.lexeme} ${right})`;
  }

  if (type === 'UNARY') {
    const right = stringifyAST(node.right);
    return `(${node.operator.lexeme} ${right})`;
  }

  if (type === 'LITERAL') {
    return node.value;
  }
}

/**
 * Evaluate the AST
 * @param {node} node
 */
function evaluateAST(node) {
  const type = node.type;
  if (type === 'BINARY') {
    const left = evaluateAST(node.left);
    const right = evaluateAST(node.right);
    const operatorType = node.operator.type;

    if (operatorType === 'AND') {
      return left && right;
    }

    if (operatorType === 'OR') {
      return left || right;
    }

    if (operatorType === 'XOR') {
      return !!(left ^ right);
    }
  }

  if (type === 'UNARY') {
    const right = evaluateAST(node.right);
    const operatorType = node.operator.type;

    if (operatorType === 'NOT') {
      return !right;
    }
  }

  if (type === 'LITERAL') {
    return node.value;
  }
}

export function booleanExpressionEvaluator(expression) {
  const tokens = new Tokenizer(expression).tokenize();
  const ast = new Parser(tokens).parse();
  return evaluateAST(ast);
}
