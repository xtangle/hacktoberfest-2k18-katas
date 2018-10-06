import { longestUniqueSubstring } from './longestUniqueSubstring';

describe('longestUniqueSubstring', () => {
  it('returns the longest unique substring', () => {
    expect(longestUniqueSubstring('aabca')).toEqual('abc');
    expect(longestUniqueSubstring('aabccdefgha')).toEqual('cdefgh');
    expect(longestUniqueSubstring('abc')).toEqual('abc');
    expect(longestUniqueSubstring('aa')).toEqual('a');
  });

  it('throws error when the input is not string', () => {
    expect(() => longestUniqueSubstring()).toThrow();
    expect(() => longestUniqueSubstring(null)).toThrow();
    expect(() => longestUniqueSubstring([])).toThrow();
    expect(() => longestUniqueSubstring({})).toThrow();
    expect(() => longestUniqueSubstring(100)).toThrow();
    expect(() => longestUniqueSubstring(NaN)).toThrow();
  });
});
