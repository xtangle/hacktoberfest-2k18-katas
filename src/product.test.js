import { product } from './product';

describe('product', () => {
  it('returns 0 when there are no numbers', () => {
    expect(product([])).toEqual(0);
  });

  it('returns the correct product when there are numbers', () => {
    expect(product([1, 2, 3])).toEqual(6);
  });

  it('returns the correct product, ignoring null & undefined values', () => {
    expect(product([1, null, 2, undefined, 3])).toEqual(6);
  });
});
