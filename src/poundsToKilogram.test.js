import { poundsToKilogram } from './poundsToKilogram';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(poundsToKilogram()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(poundsToKilogram()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(poundsToKilogram()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(poundsToKilogram()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { poundsToKilogram(); }).toThrow();
 */

describe('poundsToKilogram', () => {
  it('converts pounds to kilogram', () => {
    expect(poundsToKilogram(10)).toEqual(4.54);
    expect(poundsToKilogram(23.4)).toEqual(10.61);
    expect(poundsToKilogram(3.47)).toEqual(1.57);
    expect(poundsToKilogram(0)).toEqual(0);
    expect(poundsToKilogram(10)).not.toEqual(10);
    expect(poundsToKilogram("")).toThrow();
    expect(poundsToKilogram()).toThrow();
    // TODO Your own assertion here
  });

  it('poundsToKilogram does that other thing...', () => {
    // TODO Your own assertion here
  });

  it('poundsToKilogram does a very cool thing...', () => {
    // TODO Your own assertion here
  });
});
