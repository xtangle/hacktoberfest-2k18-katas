import { findFirstNonRepetingChar } from './findFirstNonRepetingChar';

describe('findFirstNonRepetingChar', () => {
  it('should return "t"', () => {
    expect(findFirstNonRepetingChar('stress')).toBe('t'); // TODO Your test instead
  });

  it('should return "banana"', () => {
    expect(findFirstNonRepetingChar('banana')).toBe('b'); // TODO Your test instead
  });

  it('should return "h"', () => {
    expect(findFirstNonRepetingChar('shell-less')).toBe('h'); // TODO Your test instead
  });

  it('should return ""', () => {
    expect(findFirstNonRepetingChar('zzz')).toBe(''); // TODO Your test instead
  });
})