export const greatestNumberInArray = (arr) => {
  if (!arr || arr.constructor !== Array || arr.length === 0) {
    throw new Error('Argument must be an array of numbers');
  }
  return Math.max(...arr);
};
