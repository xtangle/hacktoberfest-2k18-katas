import { flipObject } from './flipObject';

describe('flipObject', () => {
	it('Make keys of object values and make values the keys', () => {
		expect(flipObject({a: 1, b: 2, c: 3})).toEqual({1: 'a', 2: 'b', 3: 'c'});
		expect(flipObject({1: 'example1', 2: 'example2', 3: 'example3'})).toEqual({'example1': '1', 'example2': '2', 'example3': '3'});
	});

	it('Return false, if argument is not an object', () => {
		expect(flipObject('oouch')).toBeFalsy();
		expect(flipObject(null).toBeFalsy());
	});

	it('Return false, if values cannot be converted to keys', () => {
		expect(flipObject({'object': {}})).toBeFalsy();
		expect(flipObject({'array': []})).toBeFalsy();
	});
});
