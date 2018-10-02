import { isSuffix } from './isSuffix';

describe('isSuffix', () => {
  it('return true when a string is a suffix of another string', () => {
    expect(isSuffix('ing', 'This is the begining')).toBeTruthy();
  });

  it('return false when a string is not a suffix of another string', () => {
    expect(isSuffix('bar', 'Loving is good')).toBeFalsy();
  });

  it('return an error when argument is not a string', () => {
    expect(isSuffix(9)).toEqual('argument must be a string');
  });
});
