import { findLastItem } from './findLastItem';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(findLastItem()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(findLastItem()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(findLastItem()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(findLastItem()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { findLastItem(); }).toThrow();
 */

fdescribe('findLastItem', () => {
  it('findLastItem of the given collection array', () => {
    expect(findLastItem([1, 3, 4, 5])).toEqual(5);
  });

  it('returns -1 if collection is not passed inside findLastItem function', () => {
    expect(findLastItem([])).toEqual(-1);
  });
});
