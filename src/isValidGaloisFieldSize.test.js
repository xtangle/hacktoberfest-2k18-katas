import { isValidGaloisFieldSize } from './isValidGaloisFieldSize';

/*
 * You can read more about the Galois field here:
 * https://en.wikipedia.org/wiki/Finite_field
 *
 * The general idea:
 * - a valid Galois field size is a prime number to the power of a positive integer
 * - that is, p^i is a valid size where p is a prime number and i is a positive integer
 * - return true if valid Galois field size
 * - return false if not valid Galois field size
 */

describe('isValidGaloisFieldSize', () => {
  it('isValidGaloisFieldSize returns true for valid field size', () => {
    expect(isValidGaloisFieldSize(3)).toBeTruthy(); // 3^1
  });

  it('isValidGaloisFieldSize returns true for valid field size', () => {
    expect(isValidGaloisFieldSize(8)).toBeTruthy(); // 2^3
  });

  it('isValidGaloisFieldSize returns true for valid field size', () => {
    expect(isValidGaloisFieldSize(11)).toBeTruthy(); // 11^1
  });

  it('isValidGaloisFieldSize returns false for invalid field size', () => {
    expect(isValidGaloisFieldSize(1)).toBeFalsy(); // 1 is not a prime
  });

  it('isValidGaloisFieldSize returns false for invalid field size', () => {
    expect(isValidGaloisFieldSize(0)).toBeFalsy(); // 0 is not a prime
  });

  it('isValidGaloisFieldSize returns false for invalid field size', () => {
    expect(isValidGaloisFieldSize(-1)).toBeFalsy(); // -1 is not a prime
  }); 
});