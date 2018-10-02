import { countCharacter } from './countCharacter';

describe('countCharacter', () => {
  it('returns null if no parameter has been passed', () => {
    expect(countCharacter()).toBe(null);
  });

  it('returns null if a parameter is missing', () => {
    expect(countCharacter(null, "a")).toBe(null);
    expect(countCharacter("Text")).toBe(null);
  });

  it('returns the number of occurrences of a given char in a String', () => {
    expect(repeat("test", "t")).toBe(2);
  });
})