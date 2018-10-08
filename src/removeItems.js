export const removeItems = (arr, ...args) => {
  if (!Array.isArray(arr)) return undefined;

  let newArr = arr;

  args.forEach(item => {
    newArr = newArr.filter(item2 => item2 !== item);
  });

  return newArr;
};
