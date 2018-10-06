import { filterByType } from './filterByType';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(filterByType()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(filterByType()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(filterByType()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(filterByType()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { filterByType(); }).toThrow();
 */

describe('filterByType', () => {
  it('filter by number', () => {
    expect(filterByType([0,1,2,'3', null], 'number')).toEqual([0,1,2]);
  });

  it('filter by string', () => {
      expect(filterByType(['0', 'John', 1, null], 'string')).toEqual(['0', 'John']);
  });

  it('handle no type', () => {
      expect(filterByType(['0', 'John', 1, null])).toEqual(null);
  });
});
