import { removeZeros } from './removeZeros';

describe('removeZeros', () => {
    it('removeZeros returns an array with no zeros', () => {
      expect(removeZeros([0,1,0,3,4,0,6])).toEqual([1,3,4,6]);
    });
  });
  