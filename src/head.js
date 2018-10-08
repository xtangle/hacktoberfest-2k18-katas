export const head = (array) => {
  // TO IMPLEMENT IN ANOTHER PR
  if (!Array.isArray(array)) {
    return null;
  } 

  if (array.length === 0) {
    return null;
  }

  return array[0];
};
