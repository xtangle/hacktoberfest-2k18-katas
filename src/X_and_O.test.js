import { X_and_O } from './X_and_O';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(X_and_O()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(X_and_O()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(X_and_O()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(X_and_O()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { X_and_O(); }).toThrow();
 */

describe('X_and_O', () => {
	it('X_and_O takes a string and checks if it has the same number of "x"s and "o"s...', () => {
		expect(X_and_O('xxoo')).toBeTruthy();
		expect(X_and_O('xxooo')).toBeFalsy();
		expect(X_and_O('xoxoxoxoo')).toBeFalsy();
		expect(X_and_O('xoxoxoxo')).toBeTruthy();
	});

	it('X_and_O returns false if input is not a string...', () => {
		expect(X_and_O(null)).toBeFalsy();
		expect(X_and_O(123)).toBeFalsy();
		expect(X_and_O(undefined)).toBeFalsy();
	});

});
