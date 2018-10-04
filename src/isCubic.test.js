import { isCubic } from './isCubic';

describe('isCubic', () => {
  it('returns true when number is cubic', () => {
    expect(isCubic(1)).toBeTruthy();
    expect(isCubic('27')).toBeTruthy();
    expect(isCubic(64)).toBeTruthy();
    expect(isCubic(-1)).toBeTruthy();
  });

  it('returns false when not divisible by 3', () => {
    expect(isCubic(2112)).toBeFalsy();
    expect(isCubic('42')).toBeFalsy();
  });

  it('returns null when the input is not a string or number', () => {
    expect(isCubic({a:1})).toBeNull();
    expect(isCubic([{a: 6744}])).toBeFalsy();
  });
})