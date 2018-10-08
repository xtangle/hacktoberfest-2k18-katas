import { rotateString } from './rotateString';


describe('rotateString', () => {
  it('rotateString returns true for the given strings', () => {
    expect(rotateString('abcde','cdeab')).toBeTruthy();
  });

  it('rotateString returns false for the given strings', () => {
    expect(rotateString('abcde','abcde')).toBeFalsy();
  });
});
