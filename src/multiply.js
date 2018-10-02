export const multiply = val => {
  //
  if (!val.length) {
    return 1;
  }
  return val.reduce((a, b) => a * b);
};
