import { fToC } from './fToC';

// °C = 5/9 x (°F -32)

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

  it('returns an error', () => {
    expect(fToC()).toThrow('ValidationError');
  });

})
