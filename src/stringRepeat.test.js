import { stringRepeat } from './stringRepeat';

describe('stringRepeat', () => {
  test('should return repeated string', () => {
    expect(stringRepeat('Hello', 4)).toEqual('HelloHelloHelloHello');
    expect(stringRepeat('a', 2)).toEqual('aa');
    expect(stringRepeat('qwerty', 7)).toEqual(
      'qwertyqwertyqwertyqwertyqwertyqwertyqwerty',
    );
  });

  test('should throws error when first argument is not a string', () => {
    expect(() => stringRepeat(2, 2)).toThrow();
    expect(() => stringRepeat([], 2)).toThrow();
    expect(() => stringRepeat({}, 2)).toThrow();
    expect(() => stringRepeat(null, 2)).toThrow();
    expect(() => stringRepeat(false, 2)).toThrow();
    expect(() => stringRepeat(true, 2)).toThrow();
    expect(() => stringRepeat(undefined, 2)).toThrow();
    expect(() => stringRepeat(NaN, 2)).toThrow();
  });

  test('should throws error when second argument is not an int', () => {
    expect(() => stringRepeat('a', [])).toThrow();
    expect(() => stringRepeat('a', {})).toThrow();
    expect(() => stringRepeat('a', '')).toThrow();
    expect(() => stringRepeat('a', null)).toThrow();
    expect(() => stringRepeat('a', false)).toThrow();
    expect(() => stringRepeat('a', true)).toThrow();
    expect(() => stringRepeat('a', undefined)).toThrow();
    expect(() => stringRepeat('a', NaN)).toThrow();
    expect(() => stringRepeat('a', 2.5)).toThrow();
  });
});
