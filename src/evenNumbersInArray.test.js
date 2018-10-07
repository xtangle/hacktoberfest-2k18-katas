import { evenNumbersInArray } from './evenNumbersInArray';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(evenNumbersInArray()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(evenNumbersInArray()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(evenNumbersInArray()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(evenNumbersInArray()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { evenNumbersInArray(); }).toThrow();
 */

describe('evenNumbersInArray', () => {
  it('evenNumbersInArray returns even number', () => {
    expect(evenNumbersInArray([1,2,3,4,5,6])).toEqual([2,4,6])
  });

  it('evenNumbersInArray returns an empty array', () => {
    expect(evenNumbersInArray([1,3,5])).toEqual([])
  });

  it('evenNumbersInArray should throw', () => {
    function oopsNoNumbers (){
      evenNumbersInArray(['foo', 'bar'])
    }
    expect(oopsNoNumbers).toThrow();
  });
});
