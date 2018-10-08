import { zeropad } from './zeropad';

describe('zeropad', () => {
  it('fills empty string with zeroes', () => {
    expect(zeropad('', 2)).toBe('00');
  });

  it('fills remaining length with zeroes', () => {
    expect(zeropad('2', 2)).toBe('02');
  });

  it('properly handles number type', () => {
    expect(zeropad(24, 4)).toBe('0024');
  });
});
