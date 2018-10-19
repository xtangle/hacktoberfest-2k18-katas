import { nextPerfectSquare } from './nextPerfectSquare';

describe('nextPerfectSquare', () => {
  it('should return 1 for any negative number', () => {
    expect(nextPerfectSquare(-169)).toEqual(1);
  });

  it('should return 1 for 0', () => {
    expect(nextPerfectSquare(0)).toEqual(1);
  });

  it('should return the next perfect square given any positive number', () => {
    expect(nextPerfectSquare(789)).toEqual(841);
  });

  it('should return the next perfect square given a perfect square', () => {
    expect(nextPerfectSquare(144)).toEqual(169);
  });
});
