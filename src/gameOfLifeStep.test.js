import { gameOfLifeStep } from './gameOfLifeStep';

/*
 * The goal is to implement one step of the game of life.
 * For detailed information read here: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 *
 * Rules:
 * A cell lives in the next step (generation), if
 * 1. It was alive in the current step and has not less than two neighbours and not more than 3 neighbours
 * 2. It was dead and has exactly three neighbours
 *
 * As neighbours count all eight cells around a cell.
 *
 * A living cell is represented by a '*' (asterisk)
 * A dead cell is represented by a ' ' (space)
 * The board represented by a two dimensional array of single characters
 */

describe('gameOfLifeStep', () => {
  it('empty game board, run step, game board is empty', () => {
    expect(gameOfLifeStep([[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']])).toEqual([[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']])
  });

  it('a single living cell, run step, game board is empty', () => {
    expect(gameOfLifeStep([[' ', ' ', ' '],[' ', '*', ' '],[' ', ' ', ' ']])).toEqual([[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']])
  });

  it('three cells in a row, run step, game board has three cells in a column', () => {
    expect(gameOfLifeStep([[' ', ' ', ' '],
                           ['*', '*', '*'],
                           [' ', ' ', ' ']]))

                 .toEqual([[' ', '*', ' '],
                           [' ', '*', ' '],
                           [' ', '*', ' ']])
  });

  it('block of 4 cells, run step, block of 4 cells', () => {
    expect(gameOfLifeStep([['*', '*', ' '],
                           ['*', '*', ' '],
                           [' ', ' ', ' ']]))

                 .toEqual([['*', '*', ' '],
                           ['*', '*', ' '],
                           [' ', ' ', ' ']])
  });

  it('cell with 5 neighbours, run step, cell is dead', () => {
    expect(gameOfLifeStep([[' ', ' ', ' '],
                           ['*', '*', '*'],
                           ['*', '*', '*']]))

                 .toEqual([[' ', '*', ' '],
                           ['*', ' ', '*'],
                           ['*', ' ', '*']])
  });
});
