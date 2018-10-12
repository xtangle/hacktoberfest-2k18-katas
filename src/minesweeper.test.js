import { minsweeper } from './minsweeper';

describe('minsweeper', () => {
  it('generates a minesweeper board given a square matrix', () => {
    let matrix = [
      [true,false,false], 
      [false,true,false], 
      [false,false,false]
    ];

    let board = [
      [1,2,1], 
      [2,1,1], 
      [1,1,1]
    ];                 

    expect(minsweeper(matrix)).toEqual(board);
  });

  it('generates minesweeper board correctly even if rows and colums are not equal', () => {
    let matrix = [
      [false,false,false], 
      [false,false,false]
    ];

    let board = [
      [0,0,0], 
      [0,0,0]
    ];

    expect(minsweeper(matrix)).toEqual(board);
  });

  it('minsweeper does a very cool thing...', () => {
    let matrix = [
      [false,true,true,false], 
      [true,true,false,true], 
      [false,false,true,false]
    ];

    let board = [
      [3,3,3,2], 
      [2,4,5,2], 
      [2,3,2,2]
    ];

    expect(minsweeper(matrix)).toEqual(board);
  });
});
