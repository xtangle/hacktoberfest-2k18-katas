export const max = values => {
  if (!Array.isArray(values) || !values.length) {
    return null;
  }
  return Math.max(...values);
};
