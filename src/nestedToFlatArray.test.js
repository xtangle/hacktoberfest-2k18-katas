import { nestedToFlatArray } from './nestedToFlatArray';

describe('nestedToFlatArray', () => {
  it("Given a nested array, return flat array version of it", () => {
    expect(nestedToFlatArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(nestedToFlatArray([1, [2, 3, [4, 5]], 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(nestedToFlatArray([1, [2, 3, [4, 5]], 6, [7, 8]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(nestedToFlatArray(['asd', [2, 'a', ['qwerty', 5]], 6, ['abc']])).toEqual(['asd', 2, 'a', 'querty', 5, 6, 'abc']);
  });

  it("throw cases", () => {
    expect(() => { nestedToFlatArray({}) }).toThrow();
    expect(() => { nestedToFlatArray([]) }).toThrow();
    expect(() => { nestedToFlatArray([null, false]) }).toThrow();
    expect(() => { nestedToFlatArray(false) }).toThrow();
    expect(() => { nestedToFlatArray(undefined) }).toThrow();
  })
});
