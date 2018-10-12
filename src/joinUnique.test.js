import { joinUnique } from './joinUnique';

describe('joinUnique', () => {
  it('should return undefined for invalid input', () => {
    expect(joinUnique()).toBeUndefined();
    expect(joinUnique(100)).toBeUndefined();
    expect(joinUnique("baz")).toBeUndefined();
    expect(joinUnique(undefined)).toBeUndefined();
    expect(joinUnique(true)).toBeUndefined();
    expect(joinUnique(null)).toBeUndefined();
    expect(joinUnique({foo: "bar"})).toBeUndefined();
    expect(joinUnique([10])).toBeUndefined();
    expect(joinUnique("hello", [10, 20])).toBeUndefined();
    expect(joinUnique([5, 10], "world")).toBeUndefined();
  });

  it('joins the values inside the array with their original order, but without duplicates', () => {
    expect(joinUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toBe([1, 3, 2, 5, 4]);
    expect(joinUnique([1, 3, 2], [1, [5]], [2, [4]])).toBe([1, 3, 2, [5], [4]]);
    expect(joinUnique([1, 2, 3], [5, 2, 1])).toBe([1, 2, 3, 5]);
    expect(joinUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toBe([1, 2, 3, 5, 4, 6, 7, 8]);
  });
});
