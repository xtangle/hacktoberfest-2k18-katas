export const sumOfPairs = (arr) => {
  let length = (arr[1] - arr[0]) / 2 + 1;
  return (arr[0] + arr[1]) * length / 2 + (length % 2 ? arr[Math.ceil(length / 2)] : 0);
};