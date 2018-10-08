const isOperator = (token) => {
  const OPERATORS = ['+', '-', '/', '^', '*'];
  return OPERATORS.indexOf(token) > -1;
}

const hasLowerPriority = (op1, op2) => {
  const priorityList = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
    '^': 3
  }
  return priorityList[op1] <= priorityList[op2];
}

const peek = arr => arr[arr.length - 1]

export const reversePolishNotation = (expression) => {
  const postfixOutput = [];
  const operatorStack = [];
  
  for (const token of `(${expression})`) {
    if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while(peek(operatorStack) !== '(' && operatorStack.length !== 0) {
        postfixOutput.push(operatorStack.pop());
      }
      operatorStack.pop();
    } else if (isOperator(token)) {
      while (hasLowerPriority(token, peek(operatorStack)) && operatorStack.length !== 0) {
        postfixOutput.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else {
      postfixOutput.push(token);
    }
  }
  return postfixOutput.join('');
};
