import { cToF } from './cToF';

// °F = (°C × 9/5) + 32

describe('cToF', () => {
  it('returns 104 degrees in F', () => {
    expect(cToF(40)).toEqual(104);
  });

  it('returns -40 degrees in F', () => {
    expect(cToF(-40)).toEqual(-40);
  });

  it('returns 87.8 degrees in F', () => {
    expect(cToF(31)).toEqual(87.8);
  });

})