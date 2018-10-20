import { xor } from './xor';

describe('xor', () => {
  test('should return xor of 2 base 10 values', () => {
    expect(xor(2, 4)).toEqual(6);
    expect(xor(20, 70)).toEqual(82);
    expect(xor(50, 100)).toEqual(86);
  });

  test('should throws error when first argument is not an int', () => {
    expect(() => xor([], 2)).toThrow();
    expect(() => xor({}, 2)).toThrow();
    expect(() => xor('', 2)).toThrow();
    expect(() => xor(null, 2)).toThrow();
    expect(() => xor(false, 2)).toThrow();
    expect(() => xor(true, 2)).toThrow();
    expect(() => xor(undefined, 2)).toThrow();
    expect(() => xor(NaN, 2)).toThrow();
    expect(() => xor(2.5, 2)).toThrow();
  });

  test('should throws error when second argument is not an int', () => {
    expect(() => xor(2, [])).toThrow();
    expect(() => xor(2, {})).toThrow();
    expect(() => xor(2, '')).toThrow();
    expect(() => xor(2, null)).toThrow();
    expect(() => xor(2, false)).toThrow();
    expect(() => xor(2, true)).toThrow();
    expect(() => xor(2, undefined)).toThrow();
    expect(() => xor(2, NaN)).toThrow();
    expect(() => xor(2, 2.5)).toThrow();
  });
});
