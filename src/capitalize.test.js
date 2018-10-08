import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should convert the first character of a string to uppercase, and lowercases all other characters', () => {
    expect(capitalize('hello World')).toEqual('Hello world');
    expect(capitalize('happy HACKtoberfest')).toEqual('Happy hacktoberfest');
  });

  it('should throw if the argument is not a (non-empty) string', () => {
    expect(() => capitalize('')).toThrow();
    expect(() => capitalize(1)).toThrow();
    expect(() => capitalize(['foo'])).toThrow();
    expect(() => capitalize({ bar: 1 })).toThrow();
  });
});
