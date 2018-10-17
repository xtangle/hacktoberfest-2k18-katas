/*
 * Given a string, lineCount returns the number of lines that make
 * up the string.
 */
export const lineCount = (text) => {
  return (typeof text === 'string' && text !== '') ? text.split('\n').length : 0;
};
