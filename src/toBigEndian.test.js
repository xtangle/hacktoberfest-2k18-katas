import { toBigEndian } from './toBigEndian';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(toBigEndian(1099511892096)).toEqual('00000000 00000000 00000001 00000100 00000000 00000100 00001000 10000100');
 *
 */

describe('toBigEndian (32-bit representation)', () => {
	it('converts integer to big endian', () => {
		expect(toBigEndian(1025)).toEqual('00000000 00000000 00000100 00000001');
		expect(toBigEndian(133124)).toEqual('00000000 00000010 00001000 00000100');
  });
});
