export const kelvinToCelsius = (tempInKelvin) => {
  if (typeof tempInKelvin !== 'number') {
    throw new Error('Temperature must be a number');
  }
  if (tempInKelvin < 0) {
    throw new Error('Temperature must be a positive number');
  }
  const kelvinConstant = 273.15;
  return Number.parseFloat((tempInKelvin - kelvinConstant).toFixed(2));
};

