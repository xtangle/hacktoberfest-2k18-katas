import { power } from './power';

describe('power', () => {
    it('returns 125 for base 5 and power 3', () => {
        expect(power(5,3)).toEqual(125);
    });
  
    it('returns -125 for base -5 and power 3', () => {
        expect(power(-5,3)).toEqual(-125);
    });
  
    it('returns 1 for base 5 and power 0', () => {
        expect(power(5,0)).toEqual(1);
    });

    it('returns 5 for base 5 and power 1', () => {
        expect(power(5,1)).toEqual(5);
    });

    it('returns 1048576 for base 2 and power 20', () => {
        expect(power(2,20)).toEqual(1048576);
    });
  });