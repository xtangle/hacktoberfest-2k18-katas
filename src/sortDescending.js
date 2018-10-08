export const sortDescending = (arr) => {
  // TO IMPLEMENT IN ANOTHER PR
  if(!Array.isArray(arr) || arr.length ===0) {
    return -1;
  }

  return arr.sort((a, b) => b - a);
};
