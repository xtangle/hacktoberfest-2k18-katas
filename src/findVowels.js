export const findVowels = (str) => {
  const stringLetters = [...str];
  let result = [];

  if (typeof(str) !== 'string') {
    throw 'Not a string';
  }

  stringLetters.map((char, index) => {
    if (char.match(/[aeiou]/i)) {
      result.push(index + 1);
    }
  });

  return result;
};
