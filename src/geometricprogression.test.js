import { geometricprogression } from './geometricprogression';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(geometricprogression()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(geometricprogression()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(geometricprogression()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(geometricprogression()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { geometricprogression(); }).toThrow();
 */

describe('geometricprogression', () => {
  it('geometricprogression should return false', () => {
    const lists = [[1,2,3], [-1, -2, -3], [0, 1, 2], [1/3, 2/3, 1]];
    
    lists.forEach(list => {
      let actual = geometricprogression(list)
      let expected = false;
      expect(actual).toBe(expected); 
    });

  });

  it('geometricprogression should return true', () => {
    const lists = [[81, 27, 9, 3, 1], [0.3, 0.6, 1.2], [-1, -2, -4]];
    
    lists.forEach(list => {
      let actual = geometricprogression(list)
      let expected = true;
      expect(actual).toBe(expected); 
    });

  });
});
