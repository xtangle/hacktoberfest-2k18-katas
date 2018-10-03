export const decimalToHex = (decimal) => {
  return typeof decimal == 'number' ? decimal.toString(16) : null;
};