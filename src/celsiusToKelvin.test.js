import { celsiusToKelvin } from './celsiusToKelvin';

describe('celsiusToKelvin', () => {
  it('should convert from Celsius value to Kelvin value', () => {
    expect(celsiusToKelvin(-273.15)).toEqual(0);
    expect(celsiusToKelvin(-173.15)).toEqual(100);
    expect(celsiusToKelvin(0)).toEqual(273.15);
    expect(celsiusToKelvin(226.85)).toEqual(500);
  });

  it('should not accept lower value, than -273.15 C', () => {
    expect(() => celsiusToKelvin(-274)).toThrow();
  });

});
