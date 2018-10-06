import { foldArray } from './foldArray';

describe('foldArray', () => {
  it('return the folded array', () => {
    expect(foldArray([1, 2, 3, 4, 5], 1)).toStrictEqual([6, 6, 3]);
    expect(foldArray([1, 2, 3, 4, 5], 2)).toStrictEqual([9, 6]);
    expect(foldArray([1, 2, 3, 4], 1)).toStrictEqual([5, 5]);
    expect(foldArray([1, 2, 3, 4], 2)).toStrictEqual([10]);
  });

  it('return the empty array if input is empty', () => {
    expect(foldArray([], 2)).toStrictEqual([]);
  });

  it('return the same array with folding factor not present', () => {
    expect(foldArray([1, 2])).toStrictEqual([1, 2]);
    expect(foldArray([1, 2], null)).toStrictEqual([1, 2]);
  });

  it('throws error when array is not a pure number array', () => {
    expect(() => foldArray([{}, {}], 2)).toThrow();
    expect(() => foldArray([undefined, undefined], 2)).toThrow();
    expect(() => foldArray([null, null], 2)).toThrow();
    expect(() => foldArray([[], []], 2)).toThrow();
    expect(() => foldArray([NaN, NaN], 2)).toThrow();
    expect(() => foldArray([1, 2, null, 4], 2)).toThrow();
  });

  it('throws error when input is not array', () => {
    expect(() => foldArray(null, 2)).toThrow();
    expect(() => foldArray(undefined, 2)).toThrow();
    expect(() => foldArray(100, 2)).toThrow();
    expect(() => foldArray({}, 2)).toThrow();
    expect(() => foldArray(NaN, 2)).toThrow();
  });

  it('throws folding factor when input is not a integer', () => {
    expect(() => foldArray([1, 2], 2.3)).toThrow();
    expect(() => foldArray([1, 2], {})).toThrow();
    expect(() => foldArray([1, 2], [])).toThrow();
    expect(() => foldArray([1, 2], NaN)).toThrow();
  });
});
