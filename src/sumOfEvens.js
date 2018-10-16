export const sumOfEvens = (numbers) => {
  return numbers.reduce((total, number) => {
    if (number % 2 === 0) {
      return total + number;
    }
    return total;
  }, 0);
};
