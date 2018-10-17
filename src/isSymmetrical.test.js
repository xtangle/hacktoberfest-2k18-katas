import { isSymmetrical } from './isSymmetrical';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isSymmetrical()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isSymmetrical()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isSymmetrical()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isSymmetrical()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isSymmetrical(); }).toThrow();
 */

describe('isSymmetrical', () => {
	it('isSymmetrical determines whether a number isSymmetrical or not...', () => {
		expect(isSymmetrical(1112111)).toBeTruthy();
		expect(isSymmetrical(12321)).toBeTruthy();
		expect(isSymmetrical(123456789)).toBeFalsy();
		expect(isSymmetrical(1112233878)).toBeFalsy();
		expect(isSymmetrical(33333)).toBeTruthy();
		expect(isSymmetrical(122221)).toBeTruthy();
	});
	
	it('isSymmetrical returns False when given Invalid Input...', () => {
		expect(isSymmetrical(null)).toBeFalsy();
		expect(isSymmetrical(NaN)).toBeFalsy();
		expect(isSymmetrical("abc")).toBeFalsy();
	});
});
