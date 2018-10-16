export const isValidGaloisFieldSize = (n) => {
  let cntPrimeFactors = 0;
  for (let factor = 2; factor * factor <= n; factor++) {
    cntPrimeFactors += n % factor === 0;
    while (n % factor === 0) {
      n /= factor;
    }
  }
  if (n > 2) cntPrimeFactors++;
  return cntPrimeFactors === 1;
};
