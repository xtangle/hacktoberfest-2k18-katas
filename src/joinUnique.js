export const joinUnique = (...args) => {
  if (args.length < 2) {
    return undefined;
  }

  let item;
  let arr = [];

  for (item of args) {
    if (!Array.isArray(item)) {
      return undefined;
    }

    arr = arr.concat(item);
  }

  return Array.from(new Set(arr));
};
