export const X_and_O = (input) => {
  return typeof input === 'string' ? input.match(/x/g).length === input.match(/o/g).length : false;
};
