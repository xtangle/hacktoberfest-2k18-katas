export const isComposite = (num) => {
  if (!Number.isInteger(num)) {
    return null;
  }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if ((num / i) % 1 === 0) {
      return true;
    }
  }

  return false;
}