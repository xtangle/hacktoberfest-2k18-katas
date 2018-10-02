import { repeat } from './repeat';

describe('repeat', () => {
  it('returns null if no parameter has been passed', () => {
    expect(repeat()).toBe(null);
  });
  it('returns null if a parameter is missing', () => {
    expect(repeat(null, 3).toBe(null);
    expect(repeat("test").toBe(null);
  });
  it('returns the string repeated n times', () => {
    expect(repeat("test", 2).toBe("testtest");
  });
  it('catches invalid numbers and returns null in case', () => {
    expect(repeat("test", "o").toBe(null);
  });
})
