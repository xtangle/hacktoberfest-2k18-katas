import { nthRoot } from './nthRoot';

describe('nthRoot', () => {
  it('calculate the nth root of a give number', () => {
    expect(nthRoot(25,2)).toEqual(5); 
  });

  it('calculate the nth root of a give number', () => {
    expect(nthRoot(35,1)).toEqual(35); 
  });

  it('calculate the nth root of a give number', () => {
    expect(nthRoot(144,2)).toEqual(12); 
  });

  it('calculate the nth root of a give number', () => {
    expect(nthRoot(81,0)).toEqual(undefined); 
  });

})