export const fill = (array = [], value, start = 0, end = array.length) => {
  return [...array].fill(value, start, end);
};
