const PARENTHESES = "[]{}()";

export const isCorrectBracketSequence = str => {
  const stack = [];
  let character;

  for (let i = 0; (character = str[i]); i++) {
    let bracePosition = PARENTHESES.indexOf(character);

    if (bracePosition === -1) {
      continue;
    }

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else {
      if (stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
