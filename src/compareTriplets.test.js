import { compareTriplets } from './compareTriplets';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 *	expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
 *	expect(compareTriplets([1, 2, 3], [1, 2, 3])).toEqual([0, 0]);
 *	expect(compareTriplets([6, 8, 12], [7, 9, 15])).toEqual([0, 3]);
 *	expect(compareTriplets([10, 15, 20], [5, 6, 7])).toEqual([3, 0]);
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 *  expect(compareTriplets(null, null)).toBeFalsy();
 *  expect(compareTriplets([1, 2], [1])).toBeFalsy();
 *  expect(compareTriplets(undefined)).toBeFalsy();
 */

describe('compareTriplets', () => {
	it('compareTriplets takes two arrays of equal length and returns a comma separated score denoting if respective score was larger for the given array', () => {
		expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
		expect(compareTriplets([1, 2, 3], [1, 2, 3])).toEqual([0, 0]);
		expect(compareTriplets([6, 8, 12], [7, 9, 15])).toEqual([0, 3]);
		expect(compareTriplets([10, 15, 20], [5, 6, 7])).toEqual([3, 0]);
	});

	it('compareTriplets returns false if input is not an array of equal lengths', () => {
		expect(compareTriplets(null, null)).toBeFalsy();
		expect(compareTriplets([1, 2], [1])).toBeFalsy();
		expect(compareTriplets(undefined)).toBeFalsy();
	});

});
