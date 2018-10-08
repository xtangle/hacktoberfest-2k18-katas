export const zeropad = (value, length) => {
  let stringArray = [];
  if (value === "") {
    stringArray = Array(length).fill(0);
  } else {
    stringArray.push(value);
    for (let i = 0; i < length - value.toString().length; i++) {
      stringArray.unshift(0);
    }
  }
  return stringArray.join("");
};
