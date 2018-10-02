/**
 * fibonacci function implements the fibonacci numbers series.
 * Wikipedia: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @param {Number} n Generate a fibonacci sequence of length n
 *
 * @returns {Number} Sequence of fibonacci numbers of length n
 */
export const fibonacci = (n) => {
  const fibonacciSequence = [0, 1];

  if (typeof n !== 'number') {
    return 'n must be a number';
  }

  if (n <= 1) {
    return n;
  }

  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
  }

  return fibonacciSequence;
};
