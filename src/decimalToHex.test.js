import { decimalToHex } from './decimalToHex';

describe('decimalToHex', () => {
  it('returns hexadecimal from certain decimal number', () => {
    expect(decimalToHex(255)).toBe("ff");
  });
  it('return null if parameter is a string', () => {
    expect(decimalToHex("hi")).toBe(null)
  });
  it('returns 0 if decimal number is 0', () => {
    expect(decimalToHex(0)).toBe('0');
  });
  it('returns null if parameter does not exist', () => {
    expect(decimalToHex()).toBe(null);
  });
  it('returns null if parameter is an array', () => {
    expect(decimalToHex([2,0,1,8])).toBe(null);
  });
  it('returns null if parameter is an object', () => {
    expect(decimalToHex({hello: "hacktoberfest2018"})).toBe(null);
  });
}) 
