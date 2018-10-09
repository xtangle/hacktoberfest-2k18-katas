import { coinChange } from './coinChange';

describe('coinChange', () => {
    it('it count number of bit require', () => {
        expect(coinChange([], 45)).toThrow();
        expect(coinChange([], null)).toThrow();
        expect(coinChange([1,5,10,25], 45)).toEqual(3);
        expect(coinChange([1,5,10,25], 23)).toEqual(5);
        expect(coinChange([1,5,10,25], 74)).toEqual(8);
    });
});