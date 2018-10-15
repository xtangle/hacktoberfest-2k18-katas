import { celsiusToFahrenheit } from './celsiusToFahrenheit';

describe('celsiusToFahrenheit', () => {
  it('should convert from Celsius value to Fahrenheit value', () => {
    expect(celsiusToFahrenheit(-273.15)).toEqual(-459.67);
    expect(celsiusToFahrenheit(-50)).toEqual(-58);
    expect(celsiusToFahrenheit(0)).toEqual(32);
    expect(celsiusToFahrenheit(37)).toEqual(98.6);
    expect(celsiusToFahrenheit(100)).toEqual(212);
  });

  it('should not accept lower value than -273.15 °C', () => {
    expect(() => celsiusToFahrenheit(-274)).toThrow();
  });
});
