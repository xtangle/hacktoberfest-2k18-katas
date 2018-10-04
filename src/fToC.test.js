import { fToC } from './fToC';

describe('fToC', () => {
  it('returns 0 degrees in C', () => {
    expect(fToC(32)).toEqual(0);
  });

  it('returns 35 degrees in C', () => {
    expect(fToC(95)).toEqual(35);
  });

  it('returns -20 degrees in C', () => {
    expect(fToC(-4)).toEqual(-20);
  });

  it('returns null', () => {
    expect(fToC()).toEqual(null);
  });

})
