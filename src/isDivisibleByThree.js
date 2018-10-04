export const isDivisibleByThree = num => {
  if(typeof num === 'string' || typeof num === 'number') {
    return parseInt(num, 10) % 3 === 0
  }
  return null;
}