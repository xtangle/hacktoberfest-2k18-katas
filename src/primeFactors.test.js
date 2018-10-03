import { primeFactors } from './primeFactors';

describe('primeFactors', () => {

    it('returns empty array for 1', () => {
        expect(primeFactors(1)).toEqual([]);
    });

    it('returns only one primeFactor', () => {
        expect(primeFactors(7)).toEqual([7]);
    });

    it('return correct primeFactors', () => {
        expect(primeFactors(4620)).toEqual([2, 2, 3, 5, 7, 11]);
    });

    it('empty array for null', () => {
        expect(primeFactors(null)).toEqual([]);
    });

    it('empty array for undefined', () => {
        expect(primeFactors(undefined)).toEqual([]);
    });
})
