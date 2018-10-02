export const get = (data, str) => {
  return str.split('.')
    .reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, data)
};
