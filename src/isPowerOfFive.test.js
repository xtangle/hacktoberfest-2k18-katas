import {
  isPowerOfFive
} from './isPowerOfFive';

describe('isPowerOfFive', () => {
  it('the isPowerOfFive returns true if passed 3125', () => {
    expect(isPowerOfFive(3125)).toEqual(true); // TODO Your test instead
  });

  it('the isPowerofFive returns false if passed 6', () => {
    expect(isPowerOfFive(6)).toEqual(false); // TODO Your test instead
  });
})
