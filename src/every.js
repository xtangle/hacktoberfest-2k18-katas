export const every = (arr, cb) => {
  for (var i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) return false;
  }
  return true;
};
