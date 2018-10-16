const count = (n) => {
    return Math.floor(n/3) + Math.floor(n/7) - Math.floor(n/21);
};

export const countMultiplesOfThreeOrSevenOnRange = (lo, hi) => {
  return count(hi) - count(lo) + ((lo % 3 == 0 || lo % 7 == 0) ? 1 : 0);
};
