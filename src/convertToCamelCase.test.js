import { convertToCamelCase } from './convertToCamelCase';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(convertToCamelCase()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(convertToCamelCase()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(convertToCamelCase()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(convertToCamelCase()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { convertToCamelCase(); }).toThrow();
 */

describe('convertToCamelCase', () => {
  it('should return a camel case string from a non camel case string', () => {
    expect(convertToCamelCase('tabs-or-spaces')).toEqual('TabsOrSpaces');
    expect(convertToCamelCase('node-js')).toEqual('NodeJs');
    expect(convertToCamelCase('NeEds_tO_be_ConVerted')).toEqual('NeEdsTOBeConVerted');
  });

  it('Return a string with spaces to camel case', () => {
    expect(convertToCamelCase('Convert this to camel case')).toEqual('ConvertThisToCamelCase');
    expect(convertToCamelCase('This one too')).toEqual('ThisOneToo');
  });

  it('should convert snake case to camel case', () => {
    expect(convertToCamelCase('snake_case_or_camel_case')).toEqual('SnakeCaseOrCamelCase');
  });

  it('should return an error if no string is passed in', () => {
    expect(convertToCamelCase()).toEqual('Error: No Input String');
  });

  it('should return the same string if already in camel case form', () => {
    expect(convertToCamelCase('AlreadyCamelCase')).toEqual('AlreadyCamelCase');
  })
});
