import { sortArray } from './sortArray';

describe('sortArray', () => {
  it('sorts ascending with parameter', () => {
    const input = {
        array: [8, 12, -1, 99, 3, 42],
        ascending: true,
    }
    expect(sortArray(input)).toEqual([-1, 3, 8, 12, 42, 99]);
  });

  it('sorts descending by default', () => {
    expect(sortArray([8, 12, -1, 99, 3, 42])).toEqual([99, 42, 12, 8, 3, -1]);
  });

  it('throws an error on strings', () => {
    expect(() => { sortArray([8, 12, -1, 99, 3, 42, 'oops']); }).toThrow("Invalid input 'oops' at index 6");
  });
});

