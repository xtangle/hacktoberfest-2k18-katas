export const stringRepeat = (string, number) => {
  if (typeof string !== 'string' || Number.isInteger(number) || number < 0) {
    throw 'type or value not permitted'
  }
  result = '';

  for(i = 0; i < number; i++) {
    result = result + string;
  }

  return result;
};
