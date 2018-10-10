export const trailingZeroes = (number) => {
  if(!Number.isInteger(number) || number < 0) throw(TypeError);
  var zeroes = 0;
  var base = 5;
  while(base < number) {
    zeroes += Math.floor(number / base);
    base *= 5;
  }
  return zeroes;
};
