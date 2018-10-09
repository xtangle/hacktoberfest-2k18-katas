import { removeMultipleSpecialCharacters } from './removeMultipleSpecialCharacters';

describe('removeMultipleSpecialCharacters', () => {
  it('should return the number of words in the sentence', () => {
    expect(getWordCount('One, Two, Three, Four')).toEqual(4);
    expect(getWordCount('You! Got! It! Right!')).toEqual(4);
    expect(getWordCount('Can!@# you$%^ read&*() this?')).toEqual(4);
  });
});
