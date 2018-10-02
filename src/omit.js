export const omit = (obj, properties = []) => {
  return properties.reduce((newObj, property) => {
    delete newObj[property];
    return newObj;
  } , obj)
};