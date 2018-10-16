import { xbonacci } from './xbonacci';

describe('xbonacci', () => {
  describe('imitating fibonacci', () => {
    it('returns 3rd element', () => {
      expect(xbonacci([1, 1], 3)).toEqual(2);
    });

    it('returns 10th element', () => {
      expect(xbonacci([1, 1], 10)).toEqual(55);
    });

    it('returns 40th element', () => {
      expect(xbonacci([1, 1], 40)).toEqual(102334155);
    });
  });

  describe('imitating tribonacci', () => {
    it('returns 4rd element', () => {
      expect(xbonacci([1, 1, 1], 4)).toEqual(3);
    });

    it('returns 12th element', () => {
      expect(xbonacci([1, 1, 1], 12)).toEqual(355);
    });

    it('returns 42th element', () => {
      expect(xbonacci([1, 1, 1], 42)).toEqual(30883847113);
    });
  });

  describe('as a new series', () => {
    it('returns the 4th element', () => {
      expect(xbonacci([-1, -1, -1], 4)).toEqual(-3);
    });

    it('returns the 6th element', () => {
      expect(xbonacci([-1, -2], 6)).toEqual(-13);
    });

    it('returns the 10th element', () => {
      expect(xbonacci([3, 0, 6, 7], 10)).toEqual(410);
    });

    it('returns the 12th element', () => {
      expect(xbonacci([5, -5], 12)).toEqual(-170);
    });

    it('returns the 30th element', () => {
      expect(xbonacci([1, 1, 1, 1, 1, 1], 30)).toEqual(36513081);
    });
  });

  describe('Errors', () => {
    it('Throws error on null seed', () => {
      expect(() => { xbonacci(null, 3) }).toThrow();
    });

    it('Throws error on invalid seed', () => {
      expect(() => { xbonacci([1, null, 0], 5) }).toThrow();
    });

    it('Throws error on empty seed', () => {
      expect(() => { xbonacci([], 4) }).toThrow();
    });

    it('Throws error on null position', () => {
      expect(() => { xbonacci([1, 1], null) }).toThrow();
    });

    it('Throws error on invalid position', () => {
      expect(() => { xbonacci([1, 1, 1], 0) }).toThrow();
    });
  });
});
