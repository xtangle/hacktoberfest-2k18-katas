export const decimalToHex = (decimal) => {
  if(decimal == 0) {
    return 0;
  }

  return typeof decimal == 'number' ? decimal.toString(16) : null;
};