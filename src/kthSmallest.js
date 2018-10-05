/**
 * Given an array and a number k where k is smaller than the size of the array, 
 * we need to find the k’th smallest element in the given array.
 * It is given that all array elements are distinct.
 */
export const kthSmallest = (array, k) => {
  if (k && array && array.length > 0) {
    array.sort((a, b) => a - b);
    return array[k - 1];
  }
  return null;
};