import { min } from './min';

describe('min', () => {
    it('return the min of positive numbers', () => {
        expect(max([1, 2, 3, 1000])).toEqual(1);
    });

    it('return the min of negative numbers', () => {
        expect(max([-1, 10, -100, 5])).toEqual(-100);
    });

    it('return null if there are no number in the array', () => {
        expect(max([])).toEqual(null);
    });

    it('return null if there are no array', () => {
        expect(max(null)).toEqual(null);
    });
});

