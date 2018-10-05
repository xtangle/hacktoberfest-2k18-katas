export const removeAllDuplicates = (array) => {
  if (array && Array.isArray(array)) {
    const set = new Set(array);
    return [...set];
  }
  return null;
};