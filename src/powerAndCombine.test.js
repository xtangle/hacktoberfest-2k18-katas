import { powerAndCombine } from './powerAndCombine';

describe('powerAndCombine', () => {
  it('should return null if any arguments are not numbers', () => {
    expect(powerAndCombine()).toBeNull();
    expect(powerAndCombine('')).toBeNull();
    expect(powerAndCombine('', '', '')).toBeNull();
    expect(powerAndCombine(5)).toBeNull();
    expect(powerAndCombine(5, 5)).toBeNull();
    expect(powerAndCombine('', 5, 5)).toBeNull();
    expect(powerAndCombine(5, '', 5)).toBeNull();
    expect(powerAndCombine(5, 5, '')).toBeNull();
    expect(powerAndCombine(undefined, 5, 5)).toBeNull();
    expect(powerAndCombine(5, 5, null)).toBeNull();
    expect(powerAndCombine([5, 5], 5, 5)).toBeNull();
    expect(powerAndCombine(5, { a: 5 }, 5)).toBeNull();
  });

  it('should return null if any arguments are negative', () => {
    expect(powerAndCombine(-5, 5, 5)).toBeNull();
    expect(powerAndCombine(5, -5, 5)).toBeNull();
    expect(powerAndCombine(5, 5, -5)).toBeNull();
    expect(powerAndCombine(-5, -5, 5)).toBeNull();
    expect(powerAndCombine(5, -5, -5)).toBeNull();
    expect(powerAndCombine(-5, -5, -5)).toBeNull();
  });

  it('should accurately calculate the answer', () => {
    // given three numbers (x, y, n)
    // split x by digit, raise each digit to the y power, add together, and repeat n times
    // return the nth result
    // e.g. given (123, 3, 3):
    // 123 -> 1^3 + 2^3 + 3^3 = 36 -> 3^3 + 6^3 = 243 -> 2^3 + 4^3 + 3^3 = 99
    expect(powerAndCombine(123, 3, 3)).toBe(99);
    expect(powerAndCombine(46, 4, 7)).toBe(5140);
    expect(powerAndCombine(1, 9, 4)).toBe(1);
    expect(powerAndCombine(2, 9, 4)).toBe(178779095);
    expect(powerAndCombine(9521153, 2, 11)).toBe(4);
    expect(powerAndCombine(673, 5, 6)).toBe(8833);
  });
});
