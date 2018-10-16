export const nestedToFlatArray = arr => {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    arr.includes(null, false, undefined)
  ) {
    throw new Error('Bad array provided');
  }

  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? nestedToFlatArray(curr) : curr);
  }, []);
};
