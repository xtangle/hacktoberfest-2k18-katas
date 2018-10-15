import { countBy } from './countBy';

describe('countBy', () => {
  it('return count in object', () => {
    expect(countBy([1, 2, 3])).toEqual({ 1: 1, 2: 1, 3: 1 });
    expect(countBy([1, 2, 3, 1, 1, 3])).toEqual({ 1: 3, 2: 1, 3: 2 });
    expect(
      countBy(['apple', 'orange', 'pear', 'apple', 'apple', 'pear'])
    ).toEqual({ apple: 3, orange: 1, pear: 2 });
  });

  it('return empty object when array is empty', () => {
    expect(countBy([])).toMatchObject({});
  });

  it('throws error when argument is not array', () => {
    expect(() => countBy(undefined)).toThrow();
    expect(() => countBy(null)).toThrow();
    expect(() => countBy({})).toThrow();
    expect(() => countBy('12')).toThrow();
    expect(() => countBy(12)).toThrow();
    expect(() => countBy(NaN)).toThrow();
    expect(() => countBy(true)).toThrow();
  });
});
