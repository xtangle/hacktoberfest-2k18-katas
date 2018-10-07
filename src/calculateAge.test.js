import { calculateAge } from './calculateAge';

describe('calculateAge', () => {
  it('calculateAge calculates the age between 2 dates', () => {
    expect(calculateAge("2000-01-01", "2015-11-29")).toEqual(15);
    expect(calculateAge("2005-07-26", "2015-03-20")).toEqual(9);
    expect(calculateAge("2005-07-26", "2015-08-22")).toEqual(10);
  });
});
