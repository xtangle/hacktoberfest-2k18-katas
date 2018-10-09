import { removeMultipleSpecialCharacters } from './removeMultipleSpecialCharacters';

describe('removeMultipleSpecialCharacters', () => {
  it('should return the number of words in the sentence', () => {
    expect(removeMultipleSpecialCharacters('One, Two, Three, Four')).toEqual(4);
  });

  it('should return the number of words in the sentence', () => {
    expect(removeMultipleSpecialCharacters('You! Got! It! Right!')).toEqual(4);
  });

  it('should return the number of words in the sentence', () => {
    expect(removeMultipleSpecialCharacters('Can!@# you$%^ read&*() this?')).toEqual(4);
  });
});
