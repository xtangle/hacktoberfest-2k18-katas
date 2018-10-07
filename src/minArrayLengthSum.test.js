import { minArrayLengthSum } from './minArrayLengthSum';

describe('minArrayLengthSum', () => {
    it('return the length of the shortest subarray', () => {
        expect(minArrayLengthSum([2,3,1,2,3], 7)).toStrictEqual(3);
        expect(minArrayLengthSum([2,3,1,2,4,3], 7)).toStrictEqual(2);
        expect(minArrayLengthSum([2,3,1,2,4,3,7], 7)).toStrictEqual(1);
    });
    
    it('throws error when total array sum is less then the summing factor', () => {
        expect(() => minArrayLengthSum([2,3,1,2,4], 20)).toThrow();
    });

    it('return the empty array if input is empty', () => {
        expect(minArrayLengthSum([], 2)).toStrictEqual([]);
    });

    it('return the same array if suming factor not present', () => {
        expect(minArrayLengthSum([2,3,1,2,4,3])).toStrictEqual([2, 3, 1, 2, 4, 3]);
        expect(minArrayLengthSum([2,3,1,2,4,3], null)).toStrictEqual([2, 3, 1, 2, 4, 3]);
    });

    it('throws error when array is not a pure number array', () => {
        expect(() => minArrayLengthSum([{}, {}], 2)).toThrow();
        expect(() => minArrayLengthSum([undefined, undefined], 2)).toThrow();
        expect(() => minArrayLengthSum([null, null], 2)).toThrow();
        expect(() => minArrayLengthSum([[], []], 2)).toThrow();
        expect(() => minArrayLengthSum([NaN, NaN], 2)).toThrow();
        expect(() => minArrayLengthSum([2, 3, 1, 2, null, 3], 2)).toThrow();
    });

    it('throws error when input is not array', () => {
        expect(() => minArrayLengthSum(null, 2)).toThrow();
        expect(() => minArrayLengthSum(undefined, 2)).toThrow();
        expect(() => minArrayLengthSum(100, 2)).toThrow();
        expect(() => minArrayLengthSum({}, 2)).toThrow();
        expect(() => minArrayLengthSum(NaN, 2)).toThrow();
    });
    
    it('throws summing factor when input is not a integer', () => {
        expect(() => minArrayLengthSum([2, 3, 1, 2, 4, 3], 2.3)).toThrow();
        expect(() => minArrayLengthSum([2, 3, 1, 2, 4, 3], {})).toThrow();
        expect(() => minArrayLengthSum([2, 3, 1, 2, 4, 3], [])).toThrow();
        expect(() => minArrayLengthSum([2, 3, 1, 2, 4, 3], NaN)).toThrow();
    });

});