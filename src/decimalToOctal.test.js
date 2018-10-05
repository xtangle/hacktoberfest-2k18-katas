import { decimalToOctal } from './decimalToOctal';

describe('decimalToOctal', () => {
  it('return correct value of number provided', () => {
    expect(decimalToOctal(100)).toEqual('144');
  });

  it('throws error when passed non decimal value', () => {
    expect(decimalToOctal(null)).toThrow();
  });
  it('throws error when passed non decimal value', () => {
    expect(decimalToOctal('1223RandomString')).toThrow();
  });

  it('return octal value of a number passed with a precision', () => {
    expect(decimalToOctal(100.43453)).toEqual('144.33636533526206');
  });
})
