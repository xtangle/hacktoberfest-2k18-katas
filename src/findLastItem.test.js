import { findLastItem } from './findLastItem';

const TESTS = [
  {
    value: [1, 2, 3, 4],
    expected: 4
  },
  {
    value: 'hello',
    expected: 'h'
  },
  {
    value: { a: 1, b: 2, c: 3 },
    expected: { c: 3 }
  },
  {
    value: { a: false, b: 'value', c: { a1: 'a', a2: 'b' } },
    expected: { c: { a2: 'b'} }
  }
]

describe('findLastItem', () => {
  TESTS.forEach(test => {
    it(`${test.value} => ${test.expected}`, () => {
      expect(findLastItem(test.value)).toBe(test.expected);
    });
  })
})