import { getInterval } from './getInterval';

describe('getInterval', () => {
  it('returns empty array for function without arguments', () => {
    expect(getInterval()).toEqual([]);
  });

  it('works with including endpoints', () => {
    expect(getInterval('[5,10]')).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('works with including endpoints', () => {
    expect(getInterval('[5,5]')).toEqual([5]);
  });

  it('works with excluding endpoints', () => {
    expect(getInterval('(5,10]')).toEqual([6, 7, 8, 9, 10]);
  });

  it('works with excluding endpoints', () => {
    expect(getInterval('[5,10)')).toEqual([5, 6, 7, 8, 9]);
  });

  it('works with excluding endpoints', () => {
    expect(getInterval('(5,10)')).toEqual([6, 7, 8, 9]);
  });

  it('works with excluding endpoints', () => {
    expect(getInterval('(5, 5)')).toEqual([]);
  });

  it('works with decreasing endpoints', () => {
    expect(getInterval('(15,10)')).toEqual([14, 13, 12, 11]);
  });

  it('works with different steps', () => {
    expect(getInterval('(5,30)', 5)).toEqual([10, 15, 20, 25]);
  });
});
