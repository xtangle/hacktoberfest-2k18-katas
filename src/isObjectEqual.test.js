import { isObjectEqual } from './isObjectEqual';

describe('isObjectEqual', () => {
	let obj = { firstname: 'John', lastname: 'Doe', age: 28, pets: ['spike', 'chewy'] };
	it('Testing matching a object with equal values', () => {
		expect(
			isObjectEqual(obj, { firstname: 'John', lastname: 'Doe', age: 28, pets: ['spike', 'chewy'] })
		).toBeTruthy();
	});

	it('Testing matching the string properties', () => {
		expect(
			isObjectEqual(obj, { firstname: 'Jane', lastname: 'Miller', age: 28, pets: ['spike', 'chewy'] })
		).toBeFalsy();
	});

	it('Testing to match the object with itself', () => {
		expect(isObjectEqual(obj, obj)).toBeTruthy();
	});

	it('Testing to match the arrays in object', () => {
		expect(isObjectEqual(obj, { firstname: 'John', lastname: 'Doe', age: 28, pets: ['Snoopy'] })).toBeFalsy();
	});

	it('Testing to match an empty object', () => {
		expect(isObjectEqual(obj, {})).toBeFalsy();
	});

	it('Testing to match with something other than an object', () => {
		expect(isObjectEqual(123, { number: 123 })).toBeFalsy();
		expect(isObjectEqual([1, 2, 3], { array: [1, 2, 3] })).toBeFalsy();
		expect(isObjectEqual('hello', { string: 'world' })).toBeFalsy();
		expect(isObjectEqual({ match: 'validObject' }, [1, 2, 3])).toBeFalsy();
		expect(isObjectEqual({ match: 'validObject' }, 'hello')).toBeFalsy();
		expect(isObjectEqual({ match: 'validObject' }, 123)).toBeFalsy();
	});
});
