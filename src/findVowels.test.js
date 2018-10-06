import { findVowels } from './findVowels';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(findVowels()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(findVowels()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(findVowels()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(findVowels()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { findVowels(); }).toThrow();
 */

describe('findVowels', () => {
    it('find vowels on string', () => {
        expect(findVowels('Super')).toEqual([2, 4]);
        expect(findVowels('Apple')).toEqual([1, 5]);
        expect(findVowels('I love Hacktoberfest!')).toEqual([1, 4, 6, 9, 13, 15, 18]);
    });

    it('no vowels on string', () => {
        expect(findVowels('Mmmm')).toEqual([]); 
        expect(findVowels('Lvgvs')).toEqual([]);
    });

    it('invalid parameters', () => {
        expect(findVowels(123)).toThrow();
        expect(findVowels([])).toThrow();
        expect(findVowels({})).toThrow(); 
        expect(findVowels(null)).toThrow();
    });
});
