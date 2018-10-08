export const addEven = (arr) => {
  if(!arr || !Array.isArray(arr) || arr.length == 0) {
    return -1;
  } else {
    return arr.reduce((result, value) => {
      if(value % 2 == 0) {
        result = result + value;
      }
      return result;
    }, 0);
  }
};
