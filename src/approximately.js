export const approximately = margin => {
  if (typeof margin === 'number' && margin >= 0) {
    return (lhs, rhs) => Math.abs(lhs - rhs) <= margin ? true : false;
  }
  throw new Error();
};
