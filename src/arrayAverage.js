export const arrayAverage = (arr) => {
  let sum = 0, avg = 0;
  if(arr.length) {
    sum = arr.reduce((a, b) => { return a+b });
    avg = sum / arr.length;
  }
  return avg;
}
