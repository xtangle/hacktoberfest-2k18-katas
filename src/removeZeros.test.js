import { removeZeros } from './removeZeros';

describe('evenNumbersInArray', () => {
    it('evenNumbersInArray returns even number', () => {
      expect(removeZeros([0,1,0,3,4,0,6])).toEqual([1,3,4,6]);
    });
  });
  