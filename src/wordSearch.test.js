import { wordSearch } from './wordSearch';

describe('wordSearch', () => {
  it('finds the word in the board', () => {
    expect(wordSearch([ ['A','B','C','E'],['S','F','C','S'],['A','D','E','E'] ], "ABCCED")).toBeTruthy();
  });

  it('finds the word in the board', () => {
    expect(wordSearch([ ['A','B','C','E'],['S','F','C','S'],['A','D','E','E'] ], "SEE")).toBeTruthy();
  });

  it('does not repeat use of a letter', () => {
    expect(wordSearch([ ['A','B','C','E'],['S','F','C','S'],['A','D','E','E'] ], "ABCB")).toBeFalsy();
  });

  it('does not use diagonal letters', () => {
    expect(wordSearch([ ['A','B','C','E'],['S','F','C','S'],['A','D','E','E'] ], "ABCSE")).toBeFalsy();
  });

});
