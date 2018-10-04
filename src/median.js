export const median = (numbers) => {
  // if array is empty or null return null
  if (numbers === null || numbers.length === 0) {
    return null;
  }

  // returns null if the array contains anything but strings or numbers
  if (numbers.some(val => typeof val != 'number' && typeof val != 'string')) {
    return null;
  }

  numbers.sort((a, b) => a - b)

  let medianValue;

  if (numbers.length % 2 == 0) {
    // if even it is the avg of the two middle number
    medianValue = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
  } else {
    // if odd it is just the middle number
    medianValue = numbers[(numbers.length - 1) / 2];
  }
  
  // convert to number if it is not already
  return Number(medianValue);
};