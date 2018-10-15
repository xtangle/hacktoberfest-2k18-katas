export const firstNonConsecutiveNumber = (numbers, previousElement) => {
  if(numbers.constructor !== Array) {
    throw new Error('Argument must be an array!');
  }
  if(previousElement && numbers.length && previousElement + 1 !== numbers[0] ) {
    return numbers[0];
  }
  if(!numbers.length) {
    return null;
  } else {
    let prev = numbers.shift();
    return firstNonConsecutiveNumber(numbers, prev);
  }
};
