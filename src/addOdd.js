export const addOdd = (arr) => {
  // check if the argument is defined, is an array, and is not empty
  if (!arr || arr.constructor !== Array || arr.length === 0) return -1;
  // loop over the array and sum the odd numbers
  return arr.reduce((finalNum, curNum) => {
    // check if the current number is odd and add it
    if ((curNum % 2) === 1) return finalNum += curNum;
    return finalNum;
  }, 0);
};
