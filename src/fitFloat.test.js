import { fitFloat } from './fitFloat';

/*
 * Fit a float into a string of the given length, rounding it as necessary.
 * Throw an error if it's impossible to fit.
 */

describe('fitFloat', () => {
  it('exact fit', () => {
    expect(fitFloat(1234.56, 7)).toEqual('1234.56');
  });

  it('some rounding', () => {
    expect(fitFloat(1234.56, 6)).toEqual('1234.6');
  });

  it('more rounding', () => {
    expect(fitFloat(1234.56, 4)).toEqual('1235');
  });

  it('impossible to fit', () => {
    expect(() => { fitFloat(1234.56, 3); }).toThrow();
  })
});
