import { numberClimber } from './numberClimber';

describe('numberClimber', () => {
  it('returns the correct array', () => {
    expect(numberClimber(13)).toBeEqual([1, 3, 6, 13]);
  });

  it('returns null otherwise', () => {
    expect(numberClimber(1)).toBeEqual([]);
    expect(numberClimber(0)).toBeEqual([]);
    expect(numberClimber(-3)).toBeEqual([]);
    expect(numberClimber(null).toBeEqual([]))
    expect(numberClimber(undefined).toBeEqual([]))
  });
})
