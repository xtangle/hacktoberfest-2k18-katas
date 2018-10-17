export const leastCommonMultiple = (x, y) => Math.abs((x * y) / gcd_two_numbers(x, y));

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return Math.abs(x);
}

