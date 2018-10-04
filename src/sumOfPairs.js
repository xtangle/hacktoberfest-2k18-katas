export const sumOfPairs = (arr) => {
  const start = arr[0] + arr[0] % 2;
  const end = arr[1] - arr[1] % 2;
  const length = (end - start) / 2 + 1;
  if (length % 2) {
    return (start + end) * Math.floor(length / 2) + (start + end) / 2;
  } else {
    return (start + end) * length / 2;
  }
};