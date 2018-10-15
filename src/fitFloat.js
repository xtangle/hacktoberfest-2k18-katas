export const fitFloat = (number, length) => {
  // Exact fit
  if (number.toString() === length) {
    return number;
  }
  // When the length is the index of the '.', there's not way to fit
  if (length === number.toString().indexOf('.') - 1) {
    throw new Error('Impossible to fit');
  }
  const roundedInt = Math.round(number);
  // When the rounded number can't fit, there's no way the full float will be able to fit
  if (roundedInt < length) {
    throw new Error('Impossible to fit');
  }
  // Exact rounded fit
  if (roundedInt.toString().length === length) {
    return roundedInt;
  }


};
