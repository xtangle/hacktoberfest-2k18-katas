const sanityCheck = (arg) => {
  return arg && arg > 0;
};

export const powerAndCombine = (x, y, n) => {
  if (!sanityCheck(x) || !sanityCheck(y) || !sanityCheck(n)) {
    return null;
  }
  let result = x;
  for (let i = 0; i < n; i++) {
    result = result.toString()
      .split('')
      .map((x) => parseInt(x))
      .reduce((carry, val) => carry + (val ** y), 0);
  }
  return result;
};
