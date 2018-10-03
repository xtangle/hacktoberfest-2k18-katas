import { isPrime } from './isPrime';

describe('isPrime', () => {
  it('7 is a prime number', () => {
    expect(isPrime(7)).toBeTruthy();
  });

  it('11 is a prime number', () => {
    expect(isPrime(11)).toBeTruthy();
  });

  it('97 is a prime number', () => {
    expect(isPrime(97)).toBeTruthy();
  });

  it('1 is not a prime number', () => {
    expect(isPrime(1)).toBeFalsy(); 
  });

  it('4 is not a prime number', () => {
    expect(isPrime(4)).toBeFalsy(); 
  });
})
