import { firstNonConsecutiveNumber } from './firstNonConsecutiveNumber';

describe('firstNonConsecutiveNumber', () => {
  it('has valid input', () => {
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6]).toEqual(null));

  });

  it('return first non-consecutive number', () => {
    expect(firstNonConsecutiveNumber([100, 101, 123, 143]).toEqual(123));
  });

  it('return throw error', () => {
    expect(() => { firstNonConsecutiveNumber({}); }).toThrow();
  });
});
