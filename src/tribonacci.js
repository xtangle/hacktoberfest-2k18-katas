export const tribonacci = (position) => {
  if (!Number.isInteger(position) ) {
    throw new Error("position should be a number");
  }
  if (position < 4) return 1;
  let first = 1;
  let second = 1;
  let third = 1;
  let number;
  for (let i =4; i <= position; i += 1) {
    number = first + second + third;
    first = second;
    second = third;
    third = number;
  }
  return number;
};
