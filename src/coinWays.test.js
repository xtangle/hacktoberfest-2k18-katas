import { coinWays } from './coinWays';

describe('coinWays', () => {
  it('coinWays returns the correct number of ways', () => {
		expect(coinWays(3, 4, [8, 3, 1, 2])).toEqual(3);
		expect(coinWays(4, 3, [1, 2, 3])).toEqual(4);
		expect(coinWays(10, 4, [2, 5, 3, 6])).toEqual(5);
		expect(coinWays(75, 27, [25,10,11,29,49,31,33,39,12,36,40,22,21,16,37,8,18,4,27,17,26,32,6,38,2,30,34])).toEqual(16694);
  });
});
