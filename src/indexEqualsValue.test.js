import { indexEqualsValue } from './indexEqualsValue';

describe('indexEqualsValue', () => {
  it('indexEqualsValue to return the first value in the array in which the index equal the value', () => {
    expect(indexEqualsValue([-8,0,2,5])).toBe(2);
  });

  it('indexEqualsValue to return -1 if no such index exists', () => {
    expect(indexEqualsValue([-1,0,3,6])).toBe(-1);
  });

});
