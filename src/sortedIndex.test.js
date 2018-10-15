import { sortedIndex } from './sortedIndex';

describe('sortedIndex', () => {
  it('returns the index the value must be inserted', () => {
    expect(sortedIndex([1, 2, 4, 5], 3)).toEqual(2);
    expect(sortedIndex([1, 2, 4, 5], 0)).toEqual(0);
    expect(sortedIndex([1, 2, 4, 5], 6)).toEqual(4);
    expect(sortedIndex([1, 2, 4, 5], 2)).toEqual(1);
  });

  it('throws error if the argument is not a number array', () => {
    expect(() => sortedIndex([{}], 1)).toThrow();
    expect(() => sortedIndex([[]], 1)).toThrow();
    expect(() => sortedIndex(['string'], 1)).toThrow();
    expect(() => sortedIndex([NaN], 1)).toThrow();
    expect(() => sortedIndex([true], 1)).toThrow();
    expect(() => sortedIndex([1, 2, 'String', 4], 1)).toThrow();
    expect(() => sortedIndex([null], 1)).toThrow();
    expect(() => sortedIndex([undefined], 1)).toThrow();
  });

  it('throws error if argument is not an array', () => {
    expect(() => sortedIndex(null, 1)).toThrow();
    expect(() => sortedIndex(undefined, 1)).toThrow();
    expect(() => sortedIndex({}, 1)).toThrow();
    expect(() => sortedIndex('string', 1)).toThrow();
    expect(() => sortedIndex(12, 1)).toThrow();
    expect(() => sortedIndex(NaN, 1)).toThrow();
    expect(() => sortedIndex(true, 1)).toThrow();
  });

  it('throws error if value is not a number', () => {
    expect(() => sortedIndex([1, 2])).toThrow();
    expect(() => sortedIndex([1, 2], null)).toThrow();
    expect(() => sortedIndex([1, 2], 'string')).toThrow();
    expect(() => sortedIndex([1, 2], NaN)).toThrow();
    expect(() => sortedIndex([1, 2], true)).toThrow();
    expect(() => sortedIndex([1, 2], {})).toThrow();
    expect(() => sortedIndex([1, 2], [])).toThrow();
  });
});
