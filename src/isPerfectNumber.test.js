import { isPerfectNumber } from './isPerfectNumber';

describe('isPerfectNumber', () => {
  it('0 is not a perfect number (not a positive integer)', () => {
     expect(isPerfectNumber(0)).toEqual(false);
  });

  it('1.73 is not a perfect number (not a positive integer)', () => {
     expect(isPerfectNumber(1.73)).toEqual(false);
  });

  it('2 is not a perfect number', () => {
    expect(isPerfectNumber(2)).toEqual(false);
  });

  it('6 is a perfect number', () => {
    expect(isPerfectNumber(6)).toEqual(true);
  });

  it('28 is a perfect number', () => {
    expect(isPerfectNumber(28)).toEqual(true);
  });

  it('29 is not a perfect number', () => {
    expect(isPerfectNumber(29)).toEqual(false);
  });

  it('495 is not a perfect number', () => {
    expect(isPerfectNumber(495)).toEqual(false);
  });

  it('496 is a perfect number', () => {
    expect(isPerfectNumber(496)).toEqual(true);
  });

  it('33550336 is a perfect number', () => {
    expect(isPerfectNumber(33550336)).toEqual(true);
  });

  it('8589869056 is a perfect number', () => {
    expect(isPerfectNumber(8589869056)).toEqual(true);
  });

});
