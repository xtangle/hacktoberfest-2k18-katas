export const sortString = (str) => {
  if(str.length) {
    return str.split("").sort().reverse().reduce((x, r) => { return r + x }).trim();
  } else {
    return "";
  }
};
