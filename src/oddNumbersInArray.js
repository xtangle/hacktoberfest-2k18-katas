export const oddNumbersInArray = (arr) => {
  if(arr.some(isNaN)) {
    throw Error("");
  } else {
    const result = [];
    arr.filter((value) => {
      if (value % 2 !== 0) {
        result.push(value);
      }
    });
    return result;
  }
};
