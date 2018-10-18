import { arrayToUpperCase } from './arrayToUpperCase';

describe('arrayToUpperCase', () => {

  it('arrayToUpperCase - strings', () => {
    let arrayIn =  ['abc', 'BB', 'aBCd'];
    let arrayOut = ['ABC', 'BB', 'ABCD'];
    expect(arrayToUpperCase(arrayIn)).toEqual(arrayOut);

    arrayIn =  ['a', 'B', 'c'];
    arrayOut = ['A', 'B', 'C'];
    expect(arrayToUpperCase(arrayIn)).toEqual(arrayOut);

    arrayIn =  ['', 'Bcc', 'aaa'];
    arrayOut = ['', 'BCC', 'AAA'];
    expect(arrayToUpperCase(arrayIn)).toEqual(arrayOut);
  });

  it('arrayToUpperCase Null', () => {
    let arrayIn = [];
    let arrayOut = [];
    expect(arrayToUpperCase(arrayIn)).toEqual(arrayOut);
  });

  it('arrayToUpperCase - array is not strictly composed of strings', () => {
    let arrayIn = [1, 'Bcc', 'aaa'];
    expect(arrayToUpperCase(arrayIn)).toThrow();
  });

  it('arrayToUpperCase - parameter is not an array', () => {
    expect(arrayToUpperCase(123)).toThrow();
    expect(arrayToUpperCase('a')).toThrow();
  });
});