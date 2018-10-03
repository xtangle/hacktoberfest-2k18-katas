export const largestString = (stringArray) => {
  if (!stringArray) return [];

  const sortedArray = stringArray.sort((a, b) => b.length - a.length);
  return sortedArray.filter((item) => (item.length === sortedArray[0].length)).reverse();
};