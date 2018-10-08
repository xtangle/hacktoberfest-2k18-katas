import { stddev } from './stddev';

describe('stddev', () => {
  it('returns zero on empty data', () => {
    expect(stddev([])).toBe(0);
  });

  it('returns correct standard deviation result', () => {
    expect(stddev([75,100,60,45,15,35,45])).toEqual(27.80);
  });
});
