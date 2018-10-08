export const switchLetters = (inputString) => {
  const wordList = inputString.split(/(?=[A-Z0-9])/);
  const switchedWordList = wordList.map(word => switchBeginningAndEnd(word)).map(word => word.toLowerCase())

  return switchedWordList.join('')
};

const switchBeginningAndEnd = (word) => {
  if(word.length === 1) {
    return word
  }
  const firstLetter = word.slice(0,1)
  const lastLetter = word.slice(-1)
  const wordCenter = word.slice(1, -1)
  return lastLetter + wordCenter + firstLetter
}
