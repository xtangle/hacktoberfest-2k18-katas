import { join } from './join';

describe('join', () => {
  it('return joined array', () => {
    expect(join([1, 2, 3], '.')).toEqual('1.2.3');
    expect(join([1, 2, 3], '|')).toEqual('1|2|3');
    expect(join([1], '|')).toEqual('1');
  });

  it('return joined array with comma when no separator is specified', () => {
    expect(join([1, 2, 3])).toEqual('1,2,3');
    expect(join([1])).toEqual('1,2,3');
  });

  it('return empty string when array is empty', () => {
    expect(join([], '.')).toEqual('');
    expect(join([])).toEqual('');
  });

  it('throws error when argument is not array', () => {
    expect(() => join(undefined, '.')).toThrow();
    expect(() => join(null, '.')).toThrow();
    expect(() => join({}, '.')).toThrow();
    expect(() => join('12', '.')).toThrow();
    expect(() => join(12, '.')).toThrow();
    expect(() => join(NaN, '.')).toThrow();
    expect(() => join(true, '.')).toThrow();
  });

  it('throws error when separator is not string', () => {
    expect(() => join([], null)).toThrow();
    expect(() => join([], {})).toThrow();
    expect(() => join([], [])).toThrow();
    expect(() => join([], '12')).toThrow();
    expect(() => join([], 12)).toThrow();
    expect(() => join([], NaN)).toThrow();
    expect(() => join([], true)).toThrow();
  });
});
