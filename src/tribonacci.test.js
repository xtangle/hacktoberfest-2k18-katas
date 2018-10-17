import { tribonacci } from './tribonacci';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(tribonacci()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(tribonacci()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(tribonacci()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(tribonacci()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { tribonacci(); }).toThrow();
 */

describe('Tribonacci', () => {
  it('Tribonacci returns the 1st element', () => {
    const result = tribonacci(1);

    expect(result).toEqual(1);
  });

  it('Tribonacci returns the 2nd element', () => {
    const result = tribonacci(2);

    expect(result).toEqual(1);
  });

  it('Tribonacci returns the 3rd element', () => {
    const result = tribonacci(3);

    expect(result).toEqual(1);
  });

  it('Tribonacci returns the 8th element', () => {
    const result = tribonacci(8);

    expect(result).toEqual(31);
  });

  it('Tribonacci returns the 15th element', () => {
    const result = tribonacci(15);

    expect(result).toEqual(2209);
  });

  it('Tribonacci returns the 50th element', () => {
    const result = tribonacci(50);

    expect(result).toEqual(4045078385041);
  });

  it('Tribonacci returns the 100th element', () => {
    const result = tribonacci(70);

    expect(result).toEqual(794174268033812681);
  });

  it('Tribonacci throws an error', () => {
    expect(() => { tribonacci(); }).toThrow();
  });
});
