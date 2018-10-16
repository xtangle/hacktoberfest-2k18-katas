import { generateSeries } from './generateSeries';

describe('generateSeries', () => {
  it('should return a function', () => {
    expect(typeof generateSeries(0, 1, jest.fn())).toBe('function');
  });
  
  it('should return a series based on the start value, length and generation function', () => {
    expect(generateSeries(1, 5, prev => prev + 1)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(generateSeries(2, 4, prev => prev * prev)).toStrictEqual([2, 4, 16, 256]);
    expect(generateSeries(2, 1, prev => prev * prev)).toStrictEqual([2]);
  });

  it('should return empty array if length is 0', () => {
    expect(generateSeries(1, 0, prev => prev + 1)).toStrictEqual([]);
  });

  it('should throw error if start value is not a number', () => {
    expect(() => generateSeries(undefined, 0, prev => prev + 1)).toThrow();
    expect(() => generateSeries(null, 0, prev => prev + 1)).toThrow();
    expect(() => generateSeries({}, 0, prev => prev + 1)).toThrow();
    expect(() => generateSeries([], 0, prev => prev + 1)).toThrow();
    expect(() => generateSeries('12', 0, prev => prev + 1)).toThrow();
    expect(() => generateSeries(NaN, 0, prev => prev + 1)).toThrow();
    expect(() => generateSeries(true, 0, prev => prev + 1)).toThrow();
  });

  it('should throw error if length value is not a number or if it is negative', () => {
    expect(() => generateSeries(1, -1, prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, undefined, prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, null, prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, {}, prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, [], prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, '12', prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, NaN, prev => prev + 1)).toThrow();
    expect(() => generateSeries(1, true, prev => prev + 1)).toThrow();
  });

  it('should throw error if length value is not a number or if it is negative', () => {
    expect(() => generateSeries(1, 1)).toThrow();
    expect(() => generateSeries(1, 1, null)).toThrow();
    expect(() => generateSeries(1, 1, {})).toThrow();
    expect(() => generateSeries(1, 1, [])).toThrow();
    expect(() => generateSeries(1, 1, 12)).toThrow();
    expect(() => generateSeries(1, 1, '12')).toThrow();
    expect(() => generateSeries(1, 1, NaN)).toThrow();
    expect(() => generateSeries(1, 1, true)).toThrow();
  });
});
