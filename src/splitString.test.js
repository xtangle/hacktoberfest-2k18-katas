import { splitString } from './splitString';

describe('splitString', () => {

  it('splits strings by provided delimiter into an array of strings', () => {
    let sentence = "This sentence should be split";

    let arr = splitString(sentence, " ");

    expect(arr).toEqual([ 'This', 'sentence', 'should', 'be', 'split' ]);
  });
});
