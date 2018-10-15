import { isEuro } from "./isEuro";

describe('isEuro', () => {
  it('returns true for correctly formatted string', () => {
      expect(isEuro('100€')).toBe(true);
      expect(isEuro('25,08€')).toBe(true);
      expect(isEuro('9,13€')).toBe(true);
      expect(isEuro('2.024.002,00€')).toBe(true);
      expect(isEuro('10.955.719,99€')).toBe(true);
      expect(isEuro('30.633.318€')).toBe(true);
      expect(isEuro('999.999.999,99€')).toBe(true);
  });
  
  it('returns false for incorrectly formatted string', () => {
      expect(isEuro('34.767,69')).toBe(false);
      expect(isEuro('€12.465,35')).toBe(false);
      expect(isEuro('270,684,125.23€')).toBe(false);
      expect(isEuro('7.492.47,10€')).toBe(false);
      expect(isEuro('.768,05€')).toBe(false);
      expect(isEuro('2.089,1€')).toBe(false);
      expect(isEuro('10,187€')).toBe(false);
      expect(isEuro('93_20€')).toBe(false);
      expect(isEuro('684.456-12€')).toBe(false);
      expect(isEuro('98.387,5€1')).toBe(false);
  });

  it('returns undefined for invalid input', () => {
      expect(isEuro()).toBeUndefined();
      expect(isEuro(true)).toBeUndefined();
      expect(isEuro(100)).toBeUndefined();
      expect(isEuro(null)).toBeUndefined();
      expect(isEuro(undefined)).toBeUndefined();
      expect(isEuro(['foo', 'bar', '$1'])).toBeUndefined();
      expect(isEuro({hello: 'world'})).toBeUndefined();
  });
});
