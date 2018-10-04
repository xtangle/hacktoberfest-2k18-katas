import { isPrimeNumber } from './isPrimeNumber';

describe('isPrimeNumber', () => {
  it('true if the number is a prime number', () => {
    expect(isPrimeNumber(2)).toBeTruthy();
  });

  it('true if the number is a prime number', () => {
    expect(isPrimeNumber(3)).toBeTruthy();
  });

  it('true if the number is a prime number', () => {
    expect(isPrimeNumber(5)).toBeTruthy();
  });

  it('true if the number is a prime number', () => {
    expect(isPrimeNumber(7)).toBeTruthy();
  });

  it('false if the number is NOT a prime number', () => {
    expect(isPrimeNumber(1)).toBeFalsy();
  });

  it('false if the number is NOT a prime number', () => {
    expect(isPrimeNumber(4)).toBeFalsy();
  });
  
  it('false if the number is NOT a prime number', () => {
    expect(isPrimeNumber(6)).toBeFalsy();
  });
  
  it('false if the number is NOT a prime number', () => {
    expect(isPrimeNumber(8)).toBeFalsy();
  });
})