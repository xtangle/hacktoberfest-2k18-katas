export const arraySum = arr => {
  if (Array.isArray(arr) && !arr.find(x => isNaN(+x))) {
    return arr.reduce((sum, n) => sum + n, 0);
  }
  throw new Error();
};
