import { isLineBreak } from './isLineBreak';

describe('isLineBreak', () => {
  it('return false when there is no line break in given string', () => {
    expect(isLineBreak("Hello world")).toBeFalsy();
  });

  it('return true when there is a line break in given string', () => {
    expect(isLineBreak("Hello\r\nworld")).toBeTruthy();
  });

  it('return true when there is a line break in given string', () => {
    expect(isLineBreak("Hello\rworld")).toBeTruthy();
  });

  it('return true when there is a line break in given string', () => {
    expect(isLineBreak("Hello\nworld")).toBeTruthy();
  });
});
