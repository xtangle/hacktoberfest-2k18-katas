import { toBaseNine } from './toBaseNine';

/*
 * Change the input value from base-10 to base-9
 */

describe('toBaseNine', () => {
  it('toBaseNine should return a base-9 value of the base-10 input', () => {
    expect(toBaseNine(9)).toEqual(10);
  });

  it('toBaseNine should return a base-9 value of the base-10 input', () => {
    expect(toBaseNine(4)).toEqual(4);
  });

  it('toBaseNine should return a base-9 value of the base-10 input', () => {
    expect(toBaseNine(29)).toEqual(32);
  });
  
  it('toBaseNine should return a base-9 value of the base-10 input', () => {
    expect(toBaseNine(-10)).toEqual(11);
  });
});
