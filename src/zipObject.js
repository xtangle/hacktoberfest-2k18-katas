export const zipObject = (keys, values) => {
  const obj = {};
  keys.forEach((key, index) => obj[key] = values[index]);
  return obj;
};
