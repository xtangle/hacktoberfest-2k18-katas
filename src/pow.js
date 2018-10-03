export const pow = (number, power) => {
  let result = 0;
  let i = 0;
  const absPower = Math.abs(power);
  for (; i < absPower - 1; i++) {
    if (absPower > 0) result += number * number;
  }
  return power > 0 ? result : 1 / result;
};
