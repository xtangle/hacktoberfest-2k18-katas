export const findFirstNonRepetingChar = (str) => {
  const strArray = str.split('');
  const charMap = new Map();
  strArray.forEach((char) => {
    if (charMap.has(char)) {
      const value = charMap.get(char);
      charMap.set(char, value + 1);
    } else {
      charMap.set(char, 1);
    }
  });
  for (let [key, value] of charMap) {
    if (value === 1) {
      return key;
    }
  }
  return '';
};