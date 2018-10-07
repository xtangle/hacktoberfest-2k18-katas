export const findLastItem = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  const lastIndex = array.length - 1;

  if (array.length > 0){
    return array[lastIndex];
  } else {
    return -1;
  }
};

