const SKIP_SYMBOLS = {
  '\t': true,
  '\n': true
};

const OPERATIONS = {
  '+': (operand1, oparand2) => operand1 + oparand2,
  '*': (operand1, oparand2) => operand1 * oparand2,
  '-': (operand1, oparand2) =>  operand1 - oparand2,
  '/': (operand1, oparand2) => oparand2 / operand1
};

const DELIMITER = ' ';

export const arithmeticExpressionEvaluator = (exp) => {

  const operands = [];
  const operations = [];
  let operandBuffer = '';

  if (!exp || typeof exp !== 'string') {
    throw "Incorrect input";
  }

  for (let i = 0; i < exp.length; i++) {
    const num = parseInt(exp[i]);
    if (
      !SKIP_SYMBOLS[exp[i]] &&
      !OPERATIONS[exp[i]] &&
      exp[i] !== DELIMITER &&
      Number.isNaN(num)
    ) {
      throw "Incorrect input";
    }

    if (SKIP_SYMBOLS[exp[i]]) continue;
    if (!Number.isNaN(num)) {

      operandBuffer += num;
    }

    if (exp[i] === ' ' || i === exp.length - 1) {
      if (operandBuffer) {
        operands.push(parseInt(operandBuffer));
        operandBuffer = '';
        if (operations.length) {
          const currentOperation = operations[operations.length - 1];
          if (currentOperation === '*' || currentOperation === '/') {
              const operation = operations.pop();
              const operand1 = operands.pop();
              const operand2 = operands.pop();
              if (!operation || !operand1 || !operand2) throw "Incorrect input";
              operands.push(OPERATIONS[operation](operand1, operand2));
          }
        }
      }
      continue;
    }

    if(OPERATIONS[exp[i]]) {
      operations.push(exp[i]);
    }
  }

  if (operandBuffer) operands.push(parseInt(operandBuffer));

  if (operations.length !== operands.length - 1) throw "Incorrect input";

  return operations.reduce((prev, current, index) => OPERATIONS[current](prev, operands[index + 1]), operands[0])
};
