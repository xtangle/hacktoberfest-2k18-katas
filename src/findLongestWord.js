export const findLongestWord = (words) => {
  if (typeof words === 'string') {
    words = words.split(/\s+/);
  }
  let selectedWord = words.pop();
  while (words.length > 0) {
    const word = words.pop();
    if (word.length > selectedWord.length) {
      selectedWord = word;
    }
  }
  return selectedWord;
};
