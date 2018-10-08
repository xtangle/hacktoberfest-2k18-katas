import { doYouKnowDaWae } from './doYouKnowDaWae';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(doYouKnowDaWae()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(doYouKnowDaWae()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(doYouKnowDaWae()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(doYouKnowDaWae()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { doYouKnowDaWae(); }).toThrow();
 */

describe(`Many brave, Ugandan Warriors formed by a group of Knuckles, 
	asking if they know the way. You're given a list of integers you've to find if they can
	go from top left cell to the bottom right cell. Remember they can only stand on those cells
	which have 1 in their binary representation at that cell. The binary representation has a 
	width represented by the 2nd argument. YOU CAN ONLY MOVE LEFT, RIGHT, TOP OR DOWN. 
	Now, you've been asked, do you know da wae? Answer true or false.`, () => {

		it('should return false if you cannot stand on source (top left).', () => {
			const test = [2, 5, 3]
			expect(doYouKnowDaWae(test, 3)).toBeFalsy()
		});

		it('should return false if you cannot stand on target (bottom right).', () => {
			const test = [2, 2]
			expect(doYouKnowDaWae(test, 2)).toBeFalsy()
		});

		it('should return false if there is not path from top left cell to bottom right cell.', () => {
			const test = [11, 5, 8, 1]
			expect(doYouKnowDaWae(test, 4)).toBeFalsy()
		});

		it('should return true if there exists a path from top left cell to bottom right cell.', () => {
			const test = [73, 106, 127, 66, 126, 112, 31]
			expect(doYouKnowDaWae(test, 7)).toBeTruthy()
		});

		it('should return true if there exists a path from top left cell to bottom right cell.', () => {
			const test = [55, 21, 29, 9]
			expect(doYouKnowDaWae(test, 6)).toBeTruthy()
		});


	});
