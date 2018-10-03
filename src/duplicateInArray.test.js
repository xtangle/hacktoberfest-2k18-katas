import { duplicateInArray } from './duplicateInArray';

describe('duplicateInArray', () => {
  it('return duplicate elements in array', () => {
    expect(duplicateInArray([1,2,3,4,5,5,6,7,8,9,9])).toEqual([5,9]);
  });

  it('return duplicate elemetns in array', () => {
    expect(duplicateInArray([2,4,6,8,8,2,2,3,5,9,4])).toEqual([8,2,4]); 
  });

  it('return null if there are no elements in the array', () => {
    expect(duplicateInArray([])).toEqual(null);
  });
})
