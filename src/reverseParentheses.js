export const reverseParentheses = (str) => {
  const regExp = /(\([a-z]+\))/g;
  let string = str;
  let matches = string.match(regExp);
  while(matches) {
    matches.forEach((match) => {
      const replaceValue = match.replace('(', '').replace(')', '').split('').reverse().join('');
      string = string.replace(match, replaceValue);
    });
    matches = string.match(regExp);
  }
  return string;
};
