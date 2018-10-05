import { evalOrQuery } from './evalOrQuery';

describe('evalOrQuery', () => {
  const arr = [
    { 'a': 12, 'x': { 0: 'abc' } },
    { 'b': 13, 'a': 16, 'x': { 0: 'def' } },
    { 'c': -1, 'd': 12, 'x': { 0: 'adc' }, 'a': -3 }
  ]

  // Comparators to compare an object from array and the query value 
  // mapped to '<', or '>', or '='.
  const cmp1 = () => -1

  const cmp2 = (ob1, val) => {
    const tp = ob1.a - val
    return tp < 0 ? -1 : tp === 0 ? 0 : 1
  }

  const cmp3 = (ob1, val) => ob1.x[0].localeCompare(val)

  // Queries to be operated over arr.
  const q1 = {
    '<': 13,
    '>': 16
  }

  const q2 = {
    '=': -3
  }

  const q3 = {
    '<': 'adc',
    '>': 'xyz',
    '=': 'def'
  }

  it('should return the original array if query is undefined.', () => {
    expect(evalOrQuery(arr, undefined, cmp1)).toEqual(arr);
  });

  it('should return the original array if query is empty.', () => {
    expect(evalOrQuery(arr, {}, cmp1)).toEqual(arr);
  });

  // You do not need to take care of the key to be compared 
  // as that is hardcoded in the comparator.

  it('should return an array of objects whose value of key a is < 13 or > 16. Refer q1.', () => {
    expect(evalOrQuery(arr, q1, cmp2)).toEqual([
      { 'a': 12, 'x': { 0: 'abc' } },
      { 'c': -1, 'd': 12, 'x': { 0: 'adc' }, 'a': -3 }
    ]);
  });

  it('should return an array of objects with value of key a = -3. Refer q2.', () => {
    expect(evalOrQuery(arr, q2, cmp2)).toEqual([
      { 'c': -1, 'd': 12, 'x': { 0: 'adc' }, 'a': -3 }
    ]);
  });

  it('should return an array of objects where the 0th element of key x is lexicographically \
  < "adc" or > "xyz" or = "def". Refer q3.', () => {
      expect(evalOrQuery(arr, q3, cmp3)).toEqual([
        { 'a': 12, 'x': { 0: 'abc' } },
        { 'b': 13, 'a': 16, 'x': { 0: 'def' } }
      ]);
    });

})