export const hexToOctal = (hex) => {
  const num = +hex;
  // convert hex string
  if (isNaN(num)) {
    hex = '0x' + hex;
    hex = +hex;
  }
  hex = hex.toString(8);
  return +hex;
};
