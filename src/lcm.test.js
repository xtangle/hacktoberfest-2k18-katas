import { lcm } from './lcm';

describe('lcm', () => {
  it('calculates least common multiple to be 1000', () => {
    expect(lcm(5,1000)).toEqual(1000); 
  });

  it('calculates least common multiple to still be 1000', () => {
    expect(lcm(1000,5)).toEqual(1000); 
  });
  it('calculates least common multiple to be null ', () => {
    expect(lcm(0,1)).toBe(null); 
  });
  it('calculates least common multiple to be 9999', () => {
    expect(lcm(9999,1)).toEqual(9999); 
  });
})