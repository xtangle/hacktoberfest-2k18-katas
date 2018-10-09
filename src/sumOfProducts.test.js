import { sumOfProducts } from './sumOfProducts';

describe('sumOfProducts', () => {
  it('returns 0 on empty arrays', () => {
    expect(sumOfProducts([], [])).toEqual(0);
  });

  it('returns the correct sum', () => {
    expect(sumOfProducts([2, 3, 4], [5, 6, 7])).toEqual(56)
  });

  it('returns the correct sum with zeroes and ones', () => {
    expect(sumOfProducts([32, 16, 8, 4, 2, 1], [1, 0, 1, 0, 1, 0])).toEqual(42)
  });
});
