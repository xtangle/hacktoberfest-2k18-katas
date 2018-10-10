export const flattenArray = arr => {
  const parsedArray = JSON.parse(arr);

  return JSON.stringify(
    parsedArray.reduce((prev, curr) => prev.concat(curr), []),
  );
};
