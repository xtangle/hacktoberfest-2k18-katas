import { tail } from './tail';

describe('tail', () => {
  it('returns the last element of an array', () => {
    expect(tail([1,2,3,4,5])).toEqual(5);
    expect(tail([1])).toEqual(1);
    expect(tail(['quick', 'brown', 'fox', 'got', 'bored', 'of', 'jumping', 'over', 'fences'])).toEqual('fences');
  });

  it('returns null when argument is not an array or an empty array', () => {
    expect(tail([])).toEqual(null);
    expect(tail({})).toEqual(null);
    expect(tail(undefined)).toEqual(null);
    expect(tail(null)).toEqual(null);
    expect(tail(NaN)).toEqual(null);
    expect(tail(1)).toEqual(null);
  });
});
