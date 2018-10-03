import { lcm } from './lcm';

describe('lcm', () => {
  it('calculates least common multiple to be 5', () => {
    expect(gcd(5,1000)).toEqual(5); 
  });

  it('calculates least common multiple to still be 5', () => {
    expect(gcd(1000,5)).toEqual(1); 
  });
  it('calculates least common multiple to be null ', () => {
    expect(gcd(0,1)).toBe(null); 
  });
  it('calculates least common multiple to be 1', () => {
    expect(gcd(9999,1)).toEqual(1); 
  });
})