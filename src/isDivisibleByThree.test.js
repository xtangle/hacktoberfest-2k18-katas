import { isDivisibleByThree } from './isDivisibleByThree';

describe('isDivisibleByThree', () => {
  it('returns true when divisible by 3', () => {
    expect(isDivisibleByThree(6744)).toBeTruthy();
    expect(isDivisibleByThree('6744')).toBeTruthy();
    expect(isDivisibleByThree(123)).toBeTruthy();
    expect(isDivisibleByThree('100000010000001')).toBeTruthy();
  });

  it('returns false when not divisible by 3', () => {
    expect(isDivisibleByThree(6002)).toBeFalsy();
    expect(isDivisibleByThree('1024')).toBeFalsy();
  });

  it('returns null when the input is not a string or number', () => {
    expect(isDivisibleByThree({a:1})).toBeNull();
    expect(isDivisibleByThree([{a: 6744}])).toBeFalsy();
  });
})