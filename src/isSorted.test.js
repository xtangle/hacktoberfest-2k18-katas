import { isSorted } from './isSorted';

describe('isSorted', () => {
  it('sorted positive numbers', () => {
    expect(isSorted([1, 2, 3, 4, 5, 6, 7])).toBeTruthy();
  });

  it('sorted negative numbers', () => {
    expect(isSorted([-8, -6, -5, -4, -3, 0])).toBeTruthy();
  });

  it('sorted mix positive and negative numbers', () => {
    expect(isSorted([-213, -89, -1, 0, 123, 545, 789])).toBeTruthy();
  });

  it('not sorted list', () => {
    expect(isSorted([123, 121, 1, 0])).toBeFalsy();
  });

  it('handles invalid input by returning null', () => {
    expect(isSorted("abc")).toBeNull();
    expect(isSorted()).toBeNull();
    expect(isSorted(null)).toBeNull();
    expect(isSorted(NaN)).toBeNull();
    expect(isSorted(123)).toBeNull();
    expect(isSorted({})).toBeNull();
  });
});
