export const largestPrimeFactor = (n) => {
  let largestPrime = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i) && n % i === 0) largestPrime = i;
  }

  function isPrime(num) {
    for (let j = 2; j < Math.sqrt(num); j++) {
      if (num % j === 0) return false;
    }
    return num > 2;
  }
  
  if (largestPrime === 0) return null;
  else return largestPrime;
};