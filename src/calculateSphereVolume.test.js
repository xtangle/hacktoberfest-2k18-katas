import { calculateSphereVolume } from './calculateSphereVolume';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(calculateSphereVolume()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(calculateSphereVolume()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(calculateSphereVolume()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(calculateSphereVolume()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { calculateSphereVolume(); }).toThrow();
 */

describe('calculateSphereVolume', () => {
  it('calculates the correct volume of a sphere given its radius with mathematical correct rounding to 2 following digits', () => {
    expect(calculateSphereVolume(1000)).toEqual(4188.79)
    expect(calculateSphereVolume(20)).toEqual(83.78)
  });

  it('returns an error if radius is negative', () => {
    expect(calculateSphereVolume(-1).toEqual("Radius needs to be a positive number!"))
  });

  it('returns an error if radius is not a number', () => {
    expect(calculateSphereVolume(NaN).toEqual("Radius needs to be a positive number!"))
    expect(calculateSphereVolume("string").toEqual("Radius needs to be a positive number!"))
  });
});
