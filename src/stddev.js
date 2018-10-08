export const stddev = (data) => {
  // Sample Standard Deviation
  // check if data is defined, is an array, and its not empty
  if (!data || data.constructor !== Array || data.length === 0) return 0;
  // get mean of all values
  const avg = data.reduce((sum, value) => sum + value, 0) / data.length;
  // for each value, substract the mean and square the result
  const squaredDiffs = data.map((value) => (value - avg) ** 2);
  // get mean of squared differences
  const avgSquareDiff = squaredDiffs.reduce((sum, value) => sum + value, 0) / (data.length - 1);
  // get the square root of that
  const std = Math.sqrt(avgSquareDiff).toFixed(2);
  // return the value as float
  return Number.parseFloat(std);
};
