export const numberClimber = (number) => {
  if (number && number > 1) {
    const sequence = [number];
    while (number > 1) {
      number = Math.trunc(number / 2);
      sequence.unshift(number);
    }
    return sequence;
  }
  return [];
};