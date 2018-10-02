import { factorial } from './factorial';

describe('factorial', () => {
  it('returns correct value when supplied 0', () => {
    expect(factorial(0)).toEqual(1);
  });

  it('returns correct value when supplied integer (5)', () => {
    expect(factorial(5)).toEqual(120);
  });

  it('returns correct value when supplied integer (10)', () => {
    expect(factorial(10)).toEqual(3628800);
  });
})