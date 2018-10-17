export const miniMaxSum = (arr) => {
  if (arr.length == 0) {
    return null;
  }
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  if (isNaN(max)) {
    return null;
  } else {
    var sum = arr.reduce((a, b) => a + b, 0);

    return [sum - max, sum - min];
  }
};
