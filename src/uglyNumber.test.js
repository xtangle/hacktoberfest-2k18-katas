import { getNthUglyNumber } from './uglyNumber';

describe('uglyNumber', () => {

  it('get 7th uglyNumber', () => {
    expect(getNthUglyNumber(7)).toEqual(8);
  });

  it('get 10th uglyNumber', () => {
    expect(getNthUglyNumber(10)).toEqual(12);
  });

  it('get 15th uglyNumber', () => {
    expect(getNthUglyNumber(15)).toEqual(24);
  });

  it('get 150th uglyNumber', () => {
    expect(getNthUglyNumber(150)).toEqual(5832);
  });

  it('get input not number', () => {
    expect(() => getNthUglyNumber('-')).toThrow();
  });

});
