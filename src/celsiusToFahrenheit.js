export const celsiusToFahrenheit = (tempInCelsius) => {
  if (typeof tempInCelsius !== 'number') {
    throw new Error('Temperature must be a number');
  }
  if (tempInCelsius < -273.15) {
    throw new Error('Temperature in Celsius must not be lower than -273.15 °C');
  }
  return Number.parseFloat((tempInCelsius * 1.8 + 32).toFixed(2));
};
