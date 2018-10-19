export const bizarreStringIncrementer = (str) => {
  const words = str.split('').filter(char => char.match(/[a-z]/i)).join('');
  const numbers = str.substring(words.length);
  const newNum = +numbers + 1;
  let numOfZeros = numbers.length - newNum.toString().length;
  if (numbers[numbers.length-1] == 9) numOfZeros -= 1;
  if (numOfZeros < 0) numOfZeros = 0;
  return words + '0'.repeat(numOfZeros) + newNum
};
