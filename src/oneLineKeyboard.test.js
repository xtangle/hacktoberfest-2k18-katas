import { oneLineKeyboard } from './oneLineKeyboard';

describe('oneLineKeyboard', () => {

  it('empty string', () => {
    expect(oneLineKeyboard('')).toBeTruthy();
  });

  it('line 1', () => {
    expect(oneLineKeyboard('45-2=43')).toBeTruthy();
  });

  it('line 2', () => {
    expect(oneLineKeyboard('qwerty')).toBeTruthy();
  });

  it('line 2', () => {
    expect(oneLineKeyboard('tryitou')).toBeTruthy();
  });

  it('no shift or caps on line 2', () => {
    expect(oneLineKeyboard('Qwerty')).toBeFalsy();
  });

  it('line 3', () => {
    expect(oneLineKeyboard('#sad')).toBeTruthy();
  });

  it('caps lock used', () => {
    expect(oneLineKeyboard('AsDf')).toBeTruthy();
  });

  it('no shift for alternate upper', () => {
    expect(oneLineKeyboard('@sDF')).toBeFalsy();
  });

  it('line 4', () => {
    expect(oneLineKeyboard('zxcvbn?')).toBeTruthy();
  });

  it('spacebar on separate line', () => {
    expect(oneLineKeyboard('zxc vbn')).toBeFalsy();
  });

  it('multiple lines', () => {
    expect(oneLineKeyboard('123abc')).toBeFalsy();
  });

  it('just space bar', () => {
    expect(oneLineKeyboard(' ')).toBeTruthy();
  });

  it('exclamation marks cannot be printed by a single line', () => {
    expect(oneLineKeyboard('!!!')).toBeFalsy();
  });
});
