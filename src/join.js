export const join = (array, seperator = ',') => {
  if (!Array.isArray(array)) {
    throw new Error(`${String(array)} is not an array`);
  }
  if (typeof seperator !== 'string') {
    throw new Error(`${String(seperator)} is not a string`);
  }
  return array.join(seperator);
};
