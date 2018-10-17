export const digitSum = (value) => {
  // TO IMPLEMENT IN ANOTHER PR
  value = '' + value;
  if (value.indexOf('-') !== -1) {
    throw ('Negative Numbers not supported')
  }
  let digitSum = 0;
  for (let i = 0; i < value.length; i++) {
    digitSum += parseInt(value[i], 10);
  }
  return digitSum;

};
