import { arrayAverage } from './arrayAverage';

describe('arrayAverage', () => {
  test('should return correct average', () => {
    expect(arrayAverage([1,2,3,4,5])).toEqual(3);
    expect(arrayAverage([10,20,30,40])).toEqual(25);
    expect(arrayAverage([-10, -20, -30, -40])).toEqual(-25);
  });
  test('should return 0 for empty array', () => {
    expect(arrayAverage([])).toEqual(0);
  });
});
