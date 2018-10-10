export const rotateString = (str1, str2) => {
  const arr = str1.split('');
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    temp = arr.shift();
    arr.push(temp);

    if (arr.join('') === str2) {
      return true;
    }
  }

  return false;
};
