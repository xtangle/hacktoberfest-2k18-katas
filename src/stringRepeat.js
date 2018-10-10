function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

export const stringRepeat = (string, times) => {
  // if (typeof string !== 'string' || !isInt(times)) {
  //   throw new Error('');
  // } else {
  let newStr = '';

  for (let index = times; index > 0; index--) {
    newStr += string;
  }

  return newStr;
  // }
};

console.log(stringRepeat(''));
