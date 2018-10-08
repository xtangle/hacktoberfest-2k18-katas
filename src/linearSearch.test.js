import { linearSearch } from './linearSearch';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(linearSearch()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(linearSearch()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(linearSearch()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(linearSearch()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { linearSearch(); }).toThrow();
 */

describe('linearSearch', () => {
  it('find index the given value form the collection or given array', () => {
    expect(linearSearch([1, 3, 4, 5], 5)).toEqual('Found at index 3');
  });

  it('Shoud return not found if the value not exits', () => {
    expect(linearSearch([1, 3, 4, 5], 6)).toEqual('Not Found');
  });

  it('Shoud return not found if the value not exits', () => {
    expect(linearSearch([1, 2, 4, 5], 2)).toEqual('Found at index 1');
  });
});
