import { oddNumbersInArray } from './oddNumbersInArray';

describe('oddNumbersInArray', () => {
  it('oddNumbersInArray returns odd number', () => {
    expect(oddNumbersInArray([1,2,3,4,5,6])).toEqual([1,3,5])
  });

  it('oddNumbersInArray returns an empty array', () => {
    expect(oddNumbersInArray([2,4,6])).toEqual([])
  });

  it('oddNumbersInArray should throw', () => {
    function oopsNoNumbers (){
      oddNumbersInArray(['foo', 'bar'])
    }
    expect(oopsNoNumbers).toThrow();
  });
});
