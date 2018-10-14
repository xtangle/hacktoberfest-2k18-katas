export const celsiusToKelvin = (celsius) => {
  const c            = Math.round(celsius * 100)
  const absoluteZero = Math.round(-273.15 * 100)

  if (c < absoluteZero) {
    throw Error();
  }

  return (c - absoluteZero) / 100;
};
