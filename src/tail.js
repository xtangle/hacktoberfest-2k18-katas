export const tail = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  } else {
    return arr[arr.length - 1];
  }
};
