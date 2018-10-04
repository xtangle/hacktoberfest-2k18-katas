export const fToC = (f) => {
  if (f) {
    return parseInt((f - 32) / 1.8);
  }

  return null;
};
