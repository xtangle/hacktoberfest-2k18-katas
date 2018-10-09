import { matrixTrace } from './matrixTrace';

describe('matrixTrace', () => {
  it('calculates matrix trace', () => {
    expect(matrixTrace([[1]])).toEqual(1);
    expect(matrixTrace([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(15);
    expect(matrixTrace([1, 2, 3, 4], [5, 6, 7, 8], [-8, -7, -6, -5], [-4, -3, -2, -1])).toEqual(0);
  });

  it('returns zero on empty matrix', () => {
    expect(matrixTrace([])).toEqual(0);
    expect(matrixTrace([[]])).toEqual(0);
  });

  it('throws exception on non-square matrices', () => {
    expect(() => { matrixTrace([[1, 2]]); }).toThrow();
  });
});
