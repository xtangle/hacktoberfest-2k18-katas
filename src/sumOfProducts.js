export const sumOfProducts = (arr1, arr2) => {
  if (arr1.length !== 0) {
    const products = arr1.map((val, i) => val * arr2[i]);
    const sum = products.reduce(function(acc, val) {
      return acc + val;
    })
    return sum;
  } else {
    return 0;
  }
};
