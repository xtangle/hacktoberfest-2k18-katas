export const convertToCamelCase = (str) => {
  return typeof str === 'undefined'
    ? 'Error: No Input String'
    : str.split(/-|_| /).map(s => s.charAt(0).toUpperCase() + s.substr(1)).join('');
};
