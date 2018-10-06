export const arrayLeftRotate = (arr, n) => {
  if (Array.isArray(arr)) {
    for (let index = 0; index < n; index++) {
      arr.push(arr.shift());
    }
    return arr;
  } else {
    return null;
  }
};
