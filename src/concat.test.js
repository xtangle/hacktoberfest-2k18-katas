import { concat } from './concat';

describe('concat', () => {
  it('should concat the sources array to target array', () => {
    expect(concat([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
  
  it('should concat multiple arrays', () => {
    expect(concat([1, 2], [3, 4], [5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  
  it('should ignore falsy values for sources', () => {
    expect(concat([1, 2])).toStrictEqual([1, 2]);
    expect(concat([1, 2], null)).toStrictEqual([1, 2]);
    expect(concat([1, 2], [3, 4], null)).toStrictEqual([1, 2, 3, 4]);
    expect(concat([1, 2], null, [3, 4])).toStrictEqual([1, 2, 3, 4]);
  })

  it('should change only target and not sources', () => {
    const target = [1, 2];
    const sourceOne = [3, 4];
    const sourceTwo = [5, 6];
    concat(target, sourceOne, sourceTwo);
    expect(target).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(sourceOne).toStrictEqual([3, 4]);
    expect(sourceTwo).toStrictEqual([5, 6]);
  });
});
