export const truncateString = (input, length, terminator) => {
  if (length === undefined) {
    return input;
  }
  if (!terminator) {
    terminator = '...';
  }

  if (length < input.length) {
    return input.substring(0, length - terminator.length) + terminator;
  }

  return input;
};
