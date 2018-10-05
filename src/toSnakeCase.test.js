import { toSnakeCase } from './toSnakeCase';

describe('toSnakeCase', () => {
  it('remove spaces and converts to snake case', () => {
    expect(toSnakeCase('foo bar baz')).toEqual('foo_bar_baz');
  });

  it('remove hypens and converts to snake case', () => {
    expect(toSnakeCase('foo-bar-baz')).toEqual('foo_bar_baz');
  });

  it('convert camel case to snake case', () => {
    expect(toSnakeCase('fooBar')).toEqual('foo_bar');
  });

  it('convert pascal case to snake case', () => {
    expect(toSnakeCase('FooBar')).toEqual('foo_bar');
  });

  it('throw error when not a string', () => {
    expect(() => toSnakeCase()).toThrow();
    expect(() => toSnakeCase(null)).toThrow();
    expect(() => toSnakeCase([])).toThrow();
    expect(() => toSnakeCase({})).toThrow();
    expect(() => toSnakeCase(100)).toThrow();
    expect(() => toSnakeCase(NaN)).toThrow();
  });
})