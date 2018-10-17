import { bizarreStringIncrementer } from './bizarreStringIncrementer';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(bizarreStringIncrementer()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(bizarreStringIncrementer()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(bizarreStringIncrementer()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(bizarreStringIncrementer()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { bizarreStringIncrementer(); }).toThrow();
 */

describe('bizarreStringIncrementer', () => {
  it('bizarreStringIncrementer adds the number 1 if string does not end in a number', () => {
    expect(bizarreStringIncrementer('foo')).toEqual('foo1');
  });

  it('bizarreStringIncrementer increments by 1 the number if the string ends with a number', () => {
    expect(bizarreStringIncrementer('foo23')).toEqual('foo24');
  });

  it('bizarreStringIncrementer considers leading zeros when incrementing', () => {
    expect(bizarreStringIncrementer('foo0041')).toEqual('foo0042');
  });

  it('bizarreStringIncrementer increments by one even when number of digits increase', () => {
    expect(bizarreStringIncrementer('foo9')).toEqual('foo10');
  });

  it('bizarreStringIncrementer fills leading zeros', () => {
    expect(bizarreStringIncrementer('foo099')).toEqual('foo100');
  });
});
