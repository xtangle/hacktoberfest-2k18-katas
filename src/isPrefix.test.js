import { isPrefix } from './isPrefix';

describe('isPrefix', () => {
  it('return true when a string is a prefix of another string', () => {
    expect(isPrefix('prefix', 'prefixing is good')).toBeTruthy();
  });

  it('return false when a string is not a prefix of another string', () => {
    expect(isPrefix('foo', 'prefixing is good')).toBeFalsy();
  });
});
