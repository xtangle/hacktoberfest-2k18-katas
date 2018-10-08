import { kelvinToCelsius } from './kelvinToCelsius';

describe('kelvinToCelsius', () => {
  it('should convert from Kelvin value to Celsius value', () => {
    expect(kelvinToCelsius(0)).toEqual(-273.15);
    expect(kelvinToCelsius(100)).toEqual(-173.15);
    expect(kelvinToCelsius(273.15)).toEqual(0);
    expect(kelvinToCelsius(500)).toEqual(226.85);
  });

  it('should not accept lower value, than 0 K', () => {
    expect(() => kelvinToCelsius(-1)).toThrow();
  });

  it('should accept only valid number inputs', () => {
    expect(() => kelvinToCelsius("100")).toThrow();
    expect(() => kelvinToCelsius([])).toThrow();
  });
});
