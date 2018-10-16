export const sortedIndex = (array, value) => {
  if (!Array.isArray(array)) throw 'First argument must be an array';
  if (array.some(el => typeof el !== 'number' || isNaN(el))) throw 'Array must contain numbers only';
  if (typeof value !== 'number' || isNaN(value)) throw 'Second argument must be a number';

  const index = array.findIndex(el => el >= value);
  return index !== -1 ? index : array.length;
};
