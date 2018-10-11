import { leftPad } from './leftPad';

describe('leftPad', () => {
  it('should use a default filler character', () => {
    expect(leftPad('foo', 5)).toEqual('  foo');
  });

  it('should use the provided filler character', () => {
    expect(leftPad('foo', 5, '0')).toEqual('00foo');
  });

  it('should work when the filler character is a number', () => {
    expect(leftPad('foo', 5, 0)).toEqual('00foo');
  });

  it(`should do nothing when the input is larger than the width`, () => {
    expect(leftPad('foo', 2)).toEqual('foo');
  });
});
