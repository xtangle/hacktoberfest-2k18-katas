import { getWordCount } from './getWordCount';

describe('getWordCount', () => {
  it('getWordCount returns the number of words in the sentence', () => {
    expect(getWordCount('These violent delights have violent ends')).toEqual(6);
  });
});
