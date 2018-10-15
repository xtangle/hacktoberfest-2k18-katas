export const characterOccurrences = (str, char) => {
  let stringArray = str.split('');
  let occurences = stringArray.filter(letter => letter === char);
  return occurences.length
};
