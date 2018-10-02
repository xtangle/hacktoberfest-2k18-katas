import { ifzero } from './ifzero';

describe('Check if sum is zero', () => {
  it('Sum is zero', () => {
    expect(ifzero([25,-25])).toEqual(true); 
  });

  it('Sum is non-zero', () => {
    expect(ifzero(30,30)).toEqual(false); 
  });

  it('return false when there are no numbers', () => {
    expect(ifzero([])).toEqual(false);
  });

  it('return 0 when no array is passed', () => {
    expect(ifzero(null)).toEqual(false);
  });
})