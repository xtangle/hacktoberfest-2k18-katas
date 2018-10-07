export const zeroOutKthBit = (input, kth) => {
  let binaryInput = [...parseInt(input, 10).toString(2)];
  binaryInput.splice(`-${kth}`, 1, '0');

  return parseInt(binaryInput.join(''), 2);
};