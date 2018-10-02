import { isOdd } from './isOdd';

describe('isOdd', () => {
  it('returns true when a number is odd', () => {
    expect(isOdd(3)).toBeTruthy();
  });

  it('returns false when a number is not odd', () => {
    expect(isOdd(222)).toBeFalsy();
  });
});
