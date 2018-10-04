export const isPrimeNumber = () => {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let x = 2; x < n; x++) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};
