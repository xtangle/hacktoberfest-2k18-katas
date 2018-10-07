export const smallestPositiveNonOccurence = (arr) => {
  
  let sorted = arr.slice().sort();
  
  let result = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < 0) continue;  // if a number is negative, continue to next number
    if (i === sorted.length - 1) {  // if we are at the end of the array, the result would be last number + 1
      result = sorted[i] + 1;
      break;
    }
    if (sorted[i + 1] - sorted[i] > 1) { // if the difference between two adjacent numbers is > 1, means some number is missing.
      result = sorted[i] + 1;
      break;
    }
  }
  
  return result;
};
