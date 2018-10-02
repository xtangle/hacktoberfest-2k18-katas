export const min = values => {
  if (!values) {
    return null;
  }
  if (!values.length) {
    return null;
  }
  return Math.min(...values);
};
