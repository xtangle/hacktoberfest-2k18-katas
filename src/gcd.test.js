import { gcd } from './gcd';

describe('gcd', () => {
  it('does something', () => {
    expect(gcd(2,8)).toBe(2); 
  });

  it('does something else', () => {
    expect(gcd(5,9)).toBe(1); 
  });
  it('does something else', () => {
    expect(gcd(1709,1729)).toBe(1); 
  });
  it('does something else', () => {
    expect(gcd(11,121)).toBe(11); 
  });
})