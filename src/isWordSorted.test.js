import { isWordSorted } from './isWordSorted';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isWordSorted()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isWordSorted()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isWordSorted()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isWordSorted()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isWordSorted(); }).toThrow();
 */

describe('isWordSorted', () => {
  it('works in both directions', () => {
    expect(isWordSorted('accept')).toBeTruthy();
    expect(isWordSorted('rookie')).toBeTruthy();
  });

  it('rejects non-sorted words', () => {
    expect(isWordSorted('hacktober')).toBeFalsy();
    expect(isWordSorted('Sorted')).toBeFalsy();
    expect(isWordSorted('woof woof')).toBeFalsy();
  });

  it('ignores case and punctuation', () => {
    expect(isWordSorted('eFFoRT')).toBeTruthy();
    expect(isWordSorted('spoon-fed')).toBeTruthy();
    expect(isWordSorted('Y.M.C.A.')).toBeTruthy();
  });

  it('handles spooked stuff', () => {
    expect(isWordSorted('👻 S p o o k e d ! 🦇')).toBeTruthy();
  });
});
