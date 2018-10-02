export const min = values => {
  if (!values) {
    return null;
  }
  if (!values.length) {
    return 0;
  }
  return Math.min(...values);
};
