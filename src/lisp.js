export const lisp = (expr) => {
  var funcs = {
    'add': (a, b) => (a+b),
    'sub': (a, b) => (a-b),
    'mul': (a, b) => (a*b),
    'div': (a, b) => (a/b),
    'sqrt': Math.sqrt
  };
  var parseExpr = /\(([a-z]+)\s+(\d+)(?:\s+(\d+))?\)/g;
  var match = null;
  while((match = parseExpr.exec(expr)) != null) {
    parseExpr.lastIndex = 0;
    var func = funcs[match[1]];
    var result = func(+match[2], +match[3]);
    expr = expr.replace(match[0], ""+result);
  }
  return +expr;
};
