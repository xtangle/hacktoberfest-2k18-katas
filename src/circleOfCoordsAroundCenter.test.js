import { circleOfCoordsAroundCenter } from './circleOfCoordsAroundCenter';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(circleOfCoordsAroundCenter()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(circleOfCoordsAroundCenter()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(circleOfCoordsAroundCenter()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(circleOfCoordsAroundCenter()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { circleOfCoordsAroundCenter(); }).toThrow();
 */

describe('circleOfCoordsAroundCenter', () => {

  const center = {lat: 0, lon: 0};
  const pythagoreanDistance = (a, b) => {
    const diffA = a.lat - b.lat;
    const difB = a.lon - b.lon;
    return Math.sqrt(diffA * diffA - difB * difB);
  }

  it('take in input an object with lat and lon and an integer n and returns an array of n lat-lon', () => {
    const result = circleOfCoordsAroundCenter(center, 1);
    expect(result).toEqual(expect.any(Array));
    expect(result.length).toEqual(1);
    expect(result[0].lat).toBeDefined();
    expect(result[0].long).toBeDefined();

  });

  it('each element of the returned array is distant from the center by 1000', () => {
    const result = circleOfCoordsAroundCenter(center, 3);
    expect(result.length).toEqual(3);
    result.forEach(point => expect(pythagoreanDistance(center, point)).toEqual(1000));
  });

  it('each element of the returned array is at the same distance from the center', () => {
    const result = circleOfCoordsAroundCenter(center, 2);
    expect(result.length).toEqual(2);
    const firstDistance = pythagoreanDistance(center, result[0]);
    result.forEach(point => expect(pythagoreanDistance(center, point)).toEqual(firstDistance));
  });

});
