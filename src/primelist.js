import { sieveOfEratosthenes } from './sieveOfEratosthenes.js';

/*
# ERROR HANDLING:
#   Return "invalid range" for:
#     *Negative Numbers
#     *NAN (Not A Number) Data Types
#     *Start is greater than end
# 
# GOAL:
#   Return the primes numbers from the given range
#
# FORMAT:
#   "2 3 5 7 11 13 17 19 ..."
#
*/

const isInvalid = (start, end) => {
  return isNaN(start) || isNaN(end) || start < 0 || end < 0 || (end < start);
};

const createArrayOfRange = (start, end) => {
  const range = [];
  for (let i = start; i < end; i++) {
    range[i] = i;
  }

  return range;
}

export const primelist = (start, end) => {
  if (isInvalid(start, end)) {
    return 'invalid range';
  }

  // Create an array of values from the range provided
  const arrayRange = createArrayOfRange(start, end);

  // USe Sieve of Eranosthenes to find our Prime numbers
  const primesFound = sieveOfEratosthenes(arrayRange);

  // Return in the correct format
  return primesFound.join(' ');
};
