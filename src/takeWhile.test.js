import { takeWhile } from './takeWhile';

describe('takeWhile', () => {
  it('takes elements from array if they pass the predicate', () => {
    const predicate = n => Math.sqrt(n) % 1 == 0;
    const array = [2, 4, 6, 9, 17, 64];
    const expected = [4, 9, 64];
    expect(takeWhile(array, predicate)).toEqual(expected);
  });

  it('takes elements from array if they pass the predicate', () => {
    const predicate = n => n.age > 21;
    const array = [
      { name: 'Robert', age: 26 },
      { name: 'John', age: 13 },
      { name: 'Mary', age: 16 },
      { name: 'Stephen', age: 57 }
    ];
    const expected = [
      { name: 'Robert', age: 26 },
      { name: 'Stephen', age: 57 }
    ];
    expect(takeWhile(array, predicate)).toEqual(expected);
  });
})