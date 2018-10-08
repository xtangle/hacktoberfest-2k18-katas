import { occurrenceOfWord } from './occurrenceOfWord';

describe('occurrenceOfWord', () => {
  it('should count the occurrence of word given the word exists', () => {
    expect(occurrenceOfWord('This is this but this could be that. That is awesome.', 'this')).toEqual(3);
    expect(occurrenceOfWord('This is this but this could be that. That is awesome.', 'that')).toEqual(2);
    expect(occurrenceOfWord('This is this but this could be that. That is awesome.', 'awesome')).toEqual(1);
  });

  it('should throw an error if the word does not exist', () => {
    expect(occurrenceOfWord('This is this but this could be that. That is awesome.', '')).toThrow();
    expect(occurrenceOfWord('This is this but this could be that. That is awesome.')).toThrow();
  });
});
