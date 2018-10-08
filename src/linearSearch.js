export const linearSearch = (array, searchValue) => {
  let found = array.indexOf(searchValue);
  return found === -1 ? "Not Found" : "Found at index " + found;
};
