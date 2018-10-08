export const plusPerfect = (value) => {
  // TO IMPLEMENT IN ANOTHER PR

  // Plus perfect is a number such that its sum of its digits, each raised to the total number of digits in the number, add up to a number e.g. 153 = 1^3 + 5^3 + 3^3

  let str = String(value);
  let power = str.length;
  let arr = [...str].map(Number);

  let result = arr.reduce((acc, x) => {
    return acc = acc + Math.pow(x, power);
  }, 0);

  return result === value;
};
