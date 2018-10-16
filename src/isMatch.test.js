import { isMatch } from './isMatch';

describe('isMatch', () => {
    let obj = { firstname: 'John', lastname: 'Doe', age: 26, smartCoder: true};
    it("Testing matching the age", () => {
        expect(isMatch(obj, {age: 26})).toBeTruthy();
    });

    it("Testing matching the firstname", () => {
        expect(isMatch(obj, {firstname: 'John'})).toBeTruthy();
    });

    it("Testing to match the whole object with itself", () => {
        expect(isMatch(obj, obj)).toBeTruthy();
    });

    it("Testing to match the street", () => {
        expect(isMatch(obj, {street: '1s street'})).toBeFalsy();
    });

    it("Testing to match an empty object", () => {
        expect(isMatch(obj, {})).toBeFalsy();
    });

    it("Testing to match with something other than an object", () => {
        expect(isMatch(123, {number: 123})).toBeFalsy();
        expect(isMatch([1,2,3], {array: [1,2,3]})).toBeFalsy();
        expect(isMatch('hello', {string: 'world'})).toBeFalsy();
        expect(isMatch({match: 'validObject'}, [1,2,3])).toBeFalsy();
        expect(isMatch({match: 'validObject'}, 'hello')).toBeFalsy();
        expect(isMatch({match: 'validObject'}, 123)).toBeFalsy();
    });
});
