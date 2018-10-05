import { lastElementOfArray } from './lastElementOfArray';

describe('lastElementOfArray', () => {
  let arr = [1, 2, 3, 4, 5, 6];
  it('should return 6', () => {
    expect(lastElementOfArray(arr)).toEqual(6); 
  });
  let arr2 = [20]
  it('should return 20', () => {
    expect(lastElementOfArray(arr2)).toEqual(20); 
  });
})
