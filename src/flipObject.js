export const flipObject = (object) => {
  if (object === null) {
    return false;
  }
  if (typeof object !== 'object') {
    return false;
  }
  let ret = {};
  for (let k in object) {
    if (typeof object[k] === 'object') {
      return false;
    }
    ret[object[k]] = k;
  }
  return ret;
};
