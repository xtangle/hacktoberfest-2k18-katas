export const primeFactors = (num) => {
  let factors = [];
  if (num === null || num === undefined) {
    return [];
  }
  if (num === 1) {
    return [];
  }
  else {

    while (num % 2 === 0) {
      factors.push(2);
      num = num / 2;
    }

    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
      while (num % i === 0) {
        factors.push(i);
        num = num / i;
      }
    }
    if (num > 2) {
      factors.push(num);
    }
    return factors;
  }

};