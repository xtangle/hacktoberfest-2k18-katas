import { countMultiplesOfThreeOrSevenOnRange } from './countMultiplesOfThreeOrSevenOnRange';

describe('countMultiplesOfThreeOrSevenOnRange', () => {
  it('There are 1 multiples of three or seven between 3 and 3', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(3, 3)).toBe(1);
  });

  it('There are 1 multiples of three or seven between 7 and 7', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(7, 7)).toBe(1);
  });

  it('There are 3 multiples of three or seven between 3 and 7', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(3, 7)).toBe(3);
  });

  it('There are 423280390 multiples of three or seven between 78 and 987654321', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(78, 987654321)).toBe(423280390);
  });

  it('There are 375661376 multiples of three or seven between 123456789 and 999999999', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(123456789, 999999999)).toBe(375661376);
  });

  it('There are 741188237 multiples of three or seven between 14237 and 1729453455', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(14237, 1729453455)).toBe(741188237);
  });

  it('There are 315162863 multiples of three or seven between 1192283452 and 1927663465', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(1192283452, 1927663465)).toBe(315162863);
  });

  it('There are 19 multiples of three or seven between 7 and 49', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(7, 49)).toBe(19);
  });

  it('There are 35 multiples of three or seven between 3 and 81', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(3, 81)).toBe(35);
  });

  it('There are 43216970 multiples of three or seven between 1872337641 and 1973177234', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(1872337641, 1973177234)).toBe(43216970);
  });

  it('There are 42905216 multiples of three or seven between 1188234128 and 1288346297', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(1188234128, 1288346297)).toBe(42905216);
  });

  it('There are 42 multiples of three or seven between 100 and 200', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(100, 200)).toBe(42);
  });

  it('There are 0 multiples of three or seven between 23 and 23', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(23, 23)).toBe(0);
  });

  it('There are 1 multiples of three or seven between 12 and 12', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(12, 12)).toBe(1);
  });

  it('There are 397361289 multiples of three or seven between 188234 and 927364573', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(188234, 927364573)).toBe(397361289);
  });

  it('There are 71056 multiples of three or seven between 46534 and 212331', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(46534, 212331)).toBe(71056);
  });

  it('There are 920350134 multiples of three or seven between 1 and 2147483647', () => {
    expect(countMultiplesOfThreeOrSevenOnRange(1, 2147483647)).toBe(920350134);
  });
});
