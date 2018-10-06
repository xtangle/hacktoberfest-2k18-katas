export const setObjectValueAtPath = (obj, path, value) => {
  if (!obj || !path) {
    throw new Error();
  }
  const splitPath = path.split('.');
  const key = splitPath.shift();
  if (!obj.hasOwnProperty(key)) {
    obj[key] = {};
  }
  if (splitPath.length === 0) {
    obj[key] = value;
    return obj;
  }
  return setObjectValueAtPath(obj[key], splitPath.join('.'), value);
};
