import { knightMoves } from './knightMoves';

/*
 * Given a starting square and ending square on an 8x8 chessboard, the goal is to calculate
 * the minimum number of moves a Knight must make to reach the ending square from the starting square.
 *
 * On how a Knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29#Movement
 * Coordinates are given in algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_(chess)#Naming_the_squares
 */

describe('knightMoves', () => {
  it('should return the minimum number of knight moves', () => {
    expect(knightMoves('e4', 'e4')).toBe(0);
    expect(knightMoves('a1', 'b3')).toBe(1);
    expect(knightMoves('d6', 'c8')).toBe(1);
    expect(knightMoves('f5', 'e2')).toBe(2);
    expect(knightMoves('c2', 'g4')).toBe(2);
    expect(knightMoves('d4', 'h5')).toBe(3);
    expect(knightMoves('b7', 'b6')).toBe(3);
    expect(knightMoves('e8', 'c6')).toBe(4);
    expect(knightMoves('a3', 'f4')).toBe(4);
    expect(knightMoves('g1', 'g8')).toBe(5);
    expect(knightMoves('h7', 'c1')).toBe(5);
    expect(knightMoves('h1', 'a8')).toBe(6);
  });

  it('should throw on invalid inputs', () => {
    expect(() => knightMoves()).toThrow();
    expect(() => knightMoves(1, 'b2')).toThrow();
    expect(() => knightMoves('e5')).toThrow();
    expect(() => knightMoves('a9', 'f5')).toThrow();
    expect(() => knightMoves('g3', 'i4')).toThrow();
  });
});
