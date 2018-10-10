import { numberVowels } from './numberVowels';

describe('numberVowels', () => {
  // for this kata, vowels only include 'a', 'e', 'i', 'o', and 'u'
  it('should return null if the argument is not a string or contains no vowels', () => {
    expect(numberVowels('blck')).toBeNull();
    expect(numberVowels(3)).toBeNull();
    expect(numberVowels(undefined)).toBeNull();
    expect(numberVowels(null)).toBeNull();
  });

  it('should return an object listing the word with the most vowels and the number of vowels it has', () => {
    expect(numberVowels('Hello, world!')).toEqual({ most: 'Hello', number: 2 });
    expect(numberVowels('yellow dolly')).toEqual({ most: 'yellow', number: 2 });
    expect(numberVowels('What number is just plain humongous?')).toEqual({ most: 'humongous', number: 4 });
  });

  it('should, when multiple tie for the most vowels, return an object listing an array of the tied words and the number of vowels they have', () => {
    expect(numberVowels('Hello, Thomas!')).toEqual({ most: ['Hello', 'Thomas'], number: 2 });
    expect(numberVowels('yellow dolly with a green handle')).toEqual({ most: ['yellow', 'green', 'handle'], number: 2 });
  });
});
