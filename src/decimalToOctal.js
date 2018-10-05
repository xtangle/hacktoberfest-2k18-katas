export const decimalToOctal = (number) => {
  if (!number || isNaN(Number(number))) {
    throw new Error();
  }
  return number.toString(8);
};