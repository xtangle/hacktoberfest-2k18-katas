/**
 * Finds the index of an item in an array if the item passes the predicate's condition
 * @param {array} array Array to find index from
 * @param {function} predicate predicate function to test each item of array
 */
export const findIndex = (array, predicate) => {
  for (let i = 0, l = array.length; i < l; i++) {
    const element = array[i];
    if (predicate(element)) {
      return i;
    }
  }
  return -1;
};
