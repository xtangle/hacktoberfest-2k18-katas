import { christmasTree } from './christmasTree';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(christmasTree()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(christmasTree()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(christmasTree()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(christmasTree()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { christmasTree(); }).toThrow();
 */

describe('christmasTree', () => {
  it('christmasTree should be printed with 3 levels', () => {
    const result = christmasTree(3);

    expect(result).toEqual('  X  \n XXX \nXXXXX\n  I  \n');
  });

  it('christmasTree should be printed with 5 levels', () => {
    const result = christmasTree(5);

    expect(result).toEqual('    X    \n   XXX   \n  XXXXX  \n XXXXXXX \nXXXXXXXXX\n    I    \n');
  });

  it('christmasTree should fail if no parameter provided', () => {
    expect(() => { christmasTree(); }).toThrow();
  });
});
