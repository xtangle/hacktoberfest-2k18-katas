import { log2 } from './log2';

describe('log2', () => {
  it('returns the index of the most significant bit of positive numbers', () => {
    expect(log2(4)).toEqual(2);
    expect(log2(15)).toEqual(3.9068905956085187);
  });

  it('returns NaN for negative numbers', () => {
    expect(log2(-4)).toEqual(NaN);
  });
});
