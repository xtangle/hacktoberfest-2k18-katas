import { findAngleByClock } from './findAngleByClock';

describe('findAngleByClock', () => {
  it('fing angle by clock between hours and minutes', () => {
    expect(findAngleByClock("12:15")).toEqual(90);
    expect(findAngleByClock("14:24")).toEqual(84);
    expect(findAngleByClock("00:03")).toEqual(18);
    expect(findAngleByClock("00:03:30")).toEqual(18);
  });

  it('does something else', () => {
    expect(findAngleByClock()).toEqual(null);
    expect(findAngleByClock(1234)).toEqual(null);
    expect(findAngleByClock("12:30.8")).toEqual(null);
    expect(findAngleByClock("-:-")).toEqual(null);
    expect(findAngleByClock("1234")).toEqual(null);
  });
})