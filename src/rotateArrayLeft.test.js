import { rotateArrayLeft } from './rotateArrayLeft';

describe('rotateArrayLeft', () => {
  it('rotates an array by the rotation factor specified', () => {
    expect(rotateArrayLeft([1, 2, 3, 4, 5], 2)).toStrictEqual([3, 4, 5, 1, 2]);
    expect(rotateArrayLeft([1, 2, 3, 4, 5], 4)).toStrictEqual([5, 1, 2, 3, 4]);
  });

  it('returns the same array if rotation factor is negative, null or undefined', () => {
    expect(rotateArrayLeft([1, 2, 3, 4, 5], -2)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(rotateArrayLeft([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(rotateArrayLeft([1, 2, 3, 4, 5], null)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});