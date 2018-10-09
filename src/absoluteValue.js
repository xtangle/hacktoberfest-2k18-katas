export const absoluteValue = (value) => {
  if (value < 0) { //checks if negative input
    return -value; //returns the positive input
  }
  return value; //returns the already-positive input
};
