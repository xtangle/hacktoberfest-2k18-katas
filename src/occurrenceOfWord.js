export const occurrenceOfWord = (str, word) => {
  if (word === undefined || word.trim() === '') {
    throw new Error('Ocurrence Must Be Provided');
  } else {
    const reg = new RegExp(word, 'gi');
    return str.match(reg).length;
  }
};