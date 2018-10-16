export const minMaxSum = (data) => {
  let min = +Infinity, max = -Infinity;

  if (data.length < 2) return null;

  for (let item of data) {
    if ((typeof item) !== 'number') {
      return null;
    }

    if (min > item) {
      min = item;
    }

    if (max < item) {
      max = item;
    }
  }

  return min + max;
};
