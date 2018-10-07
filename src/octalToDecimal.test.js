import { octalToDecimal } from './octalToDecimal';

describe('octalToDecimal', () => {
  it('return correct value of number provided', () => {
    expect(octalToDecimal('144')).toEqual(100);
  });

  it('throws error on invalid parameters', () => {
    expect(() => octalToDecimal(123)).toThrow();
    expect(() => octalToDecimal([])).toThrow();
    expect(() => octalToDecimal({})).toThrow();
    expect(() => octalToDecimal(null)).toThrow();
  });
	
  it('throws error when passed non octal value', () => {
    expect(() => octalToDecimal('1223RandomString')).toThrow();
  });

  it('return octal value of a number passed with a precision', () => {
    expect(octalToDecimal('144.33636533526206')).toEqual(100.43453);
  });
});
