import { getKeyPaths } from './getKeyPaths';


describe('getKeyPaths', () => {
  it('returns empty array for empty object', () => {
    expect(getKeyPaths({})).toStrictEqual([]);
  });

  it('returns all the keys paths of the flat object', () => {
    const obj = {
      foo: 1,
      bar: 2,
      baz: 12
    };
    expect(getKeyPaths(obj)).toEqual(['foo', 'bar', 'baz']);
  });

  it('returns all the keys of nested object', () => {
    const obj = {
      foo: 1,
      bar: 2,
      baz: {
        foo: 3,
        bar: {
          foo: 4
        },
      },
    };
    expect(getKeyPaths(obj)).toEqual(['foo', 'bar', 'baz.foo', 'baz.bar.foo']);
  });

  it('throws error if the input is not object', () => {
    expect(() => getKeyPaths()).toThrow();
    expect(() => getKeyPaths(null)).toThrow();
    expect(() => getKeyPaths([])).toThrow();
    expect(() => getKeyPaths('string')).toThrow();
    expect(() => getKeyPaths(12)).toThrow();
    expect(() => getKeyPaths(NaN)).toThrow();
    expect(() => getKeyPaths(true)).toThrow();
  });
});
