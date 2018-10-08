export const wordCount = (phraseToSearch, wordToSearch) => {
  return phraseToSearch.split(wordToSearch).length - 1;
};
