export const objectPathRetrieve = (obj, path) =>
  path.split(".").reduce((memo, key) => {
    if (key in memo) {
      return memo[key];
    }
    throw new Error('wrong path');
  }, obj);
