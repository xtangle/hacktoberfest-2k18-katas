export const patternPresent = (str, patt) => {
  if (typeof str !== 'string' || typeof patt !== 'string' || str.length === 0 || patt.length === 0) {
    return null;
  }
  return RegExp(patt, 'g').test(str);
};
