import { primeFactors } from './primeFactors';

describe('primeFactors', () => {

    it('returns empty array for 1', () => {
        expect(primeFactors(1)).toBeEqual([]);
    });

    it('returns only one primeFactor', () => {
        expect(primeFactors(7)).toBeEqual([7]);
    });

    it('return correct primeFactors', () => {
        expect(primeFactors(4620)).toBeEqual([2, 2, 3, 5, 7, 11]);
    });

    it('empty array for null', () => {
        expect(primeFactors(null)).toBeEqual([]);
    });

    it('empty array for undefined', () => {
        expect(primeFactors(undefined)).toBeEqual([]);
    });
})
