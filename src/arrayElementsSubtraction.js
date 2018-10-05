export const arrayElementsSubtraction = (a, b) => {
  if (a.length !== b.length) throw new Error("Array's lengths are unequal");
  return a.map((el, i) => {
    if (typeof el === 'number' && typeof b[i] === 'number') {
      return el - b[i];
    } else {
      throw new Error('Array values should be a number');
    }
  });
};