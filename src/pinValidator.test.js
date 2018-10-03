import { pinValidator } from './pinValidator';

describe('pinValidator', () => {
  it('should return null if no value passed', () => {
    expect(pinValidator()).toBeNull();
  });
  it('should return null if empty array is passed', () => {
    expect(pinValidator()).toBeNull();
  });
  it('should return false if length is not equal to 4', () => {
    expect(pinValidator([1, 2, 3])).toBeFalsy();
  });
  it('should return false if passed values contains non numeric values', () => {
    expect(pinValidator(['a', 1, 2, 3, 'd'])).toBeFalsy();
  });
  it('should return false if passed values contains decimal numbers', () => {
    expect(pinValidator([1, 2, 3, 4.5])).toBeFalsy();
  });
  it('should return true if length is equal to 4 and contains only numeric values', () => {
    expect(pinValidator([3, 3, 5, 9])).toBeTruthy();
  });
});
