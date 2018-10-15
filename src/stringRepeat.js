export const stringRepeat = (string, number) => {
  if (typeof string !== 'string' || !Number.isInteger(number) || number < 0) {
    throw 'type or value not permitted'
  }
  let result;
  result = '';

  let i;
  for(i = 0; i < number; i++) {
    result = result + string;
  }

  return result;
};
