export const countingPrimes = arr => {
  let ans = 0;

  if (arr.length == 0) {
    return ans;
  } else {
    const primes = [];

    if (typeof arr == 'number') {
      return false;
    }
    
    for (let i = 0; i <= arr[arr.length - 1]; i++) {
      primes.push(true);
    }
    
    primes[0] = false;
    primes[1] = false;
    
    for (let i = 2; i <= Math.sqrt(arr[arr.length - 1]); i++) {
      if (primes[i]) {
        for (let j = i * i; j <= arr[arr.length - 1]; j += i) {
          primes[j] = false;
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (primes[arr[i]]) ans++;
    }

    return ans;
  }
};
