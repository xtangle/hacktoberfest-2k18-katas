export const mean = (numbers = []) => {
  if (!Array.isArray(numbers) || !numbers.length) {
    return null;
  }

  return numbers.reduce((accumulator, number) => accumulator + number, 0) / numbers.length;
};