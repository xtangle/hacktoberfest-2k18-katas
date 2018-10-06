import { numberClimber } from './numberClimber';

describe('numberClimber', () => {
  it('returns the correct array', () => {
    expect(numberClimber(13)).toEqual([1, 3, 6, 13]);
  });

  it('returns null otherwise', () => {
    expect(numberClimber(1)).toEqual([]);
    expect(numberClimber(0)).toEqual([]);
    expect(numberClimber(-3)).toEqual([]);
    expect(numberClimber(null)).toEqual([]);
    expect(numberClimber(undefined)).toEqual([]);
  });
})
