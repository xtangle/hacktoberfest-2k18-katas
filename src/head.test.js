import { head } from './head';

describe('head', () => {
  it('returns the first element of an array', () => {
    expect(head([1,2,3,4,5])).toEqual(1);
    expect(head([4])).toEqual(4);
    expect(head(['a','b','d'])).toEqual('a');
  });

  it('returns null when argument is not an array or empty array', () => {
    expect(head([])).toEqual(null);
    expect(head({})).toEqual(null);
    expect(head(undefined)).toEqual(null);
    expect(head(null)).toEqual(null);
    expect(head(NaN)).toEqual(null);
    expect(head(1)).toEqual(null);
  });
});
