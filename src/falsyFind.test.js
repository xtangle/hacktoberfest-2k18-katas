import { falsyFind } from './falsyFind';

describe('falsyFind', () => {
  it('returns the first falsy element', () => {
    expect(falsyFind([1, 2, 3, 4, 5], (v, i) => v % 2 === 0)).toEqual(1);
  });

  it('returns undefined if all elements are truthy', () => {
    expect(falsyFind([2, 4, 6, 8, 10], (v, i) => v % 2 === 0)).toBeUndefined();
  });

  it('works with sets', () => {
    expect(falsyFind(new Set([2, 4, 6, 8, 10]), (v, i) => v % 2 === 0)).toBeUndefined();
  });

  it('works with strings', () => {
    expect(falsyFind('hello world', (v, i) => /[a-z]/i.test(v))).toEqual(' ');
  });

  it('predicate is mandatory', () => {
    expect(falsyFind('hello world')).toThrow();
  });

  it('predicate should be a function', () => {
    expect(falsyFind('hello world', NaN)).toThrow();
  });
});
