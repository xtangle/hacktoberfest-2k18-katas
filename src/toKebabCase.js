export const toKebabCase = (str) => {
  if (str == null) { return null; }
  if (str === "") { return ""; }
  return str.trim().replace(/\s+/g, '-');
};
