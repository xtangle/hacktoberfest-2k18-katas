export const alternatingSums = (a) => {
  let result = [0, 0];
  a.map((value, index) => {
    if(index % 2) {
      result[1] += value;
    } else {
      result[0] += value;
    }
  });
  return result;
};
