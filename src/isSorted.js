export const isSorted = (values) => {
  if (!Array.isArray(values)) {
    return null;
  }
  for (var i=1; i<values.length; i++) {
    if (values[i] < values[i-1]) { return false; }
  }
  return true;
};