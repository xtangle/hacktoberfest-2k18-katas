import { largestCommonDivisor } from './largestCommonDivisor';

describe('largestCommonDivisor', () => {
  it('For 21 and 37...', () => {
    expect(largestCommonDivisor(21, 37) == 1).toBeTruthy();
  });

  it("For 42 and 74...", () => {
    expect(largestCommonDivisor(42, 74) == 2).toBeTruthy();
  });

  it("For 280 and 150...", () => {
    expect(largestCommonDivisor(280, 150) == 10).toBeTruthy();
  });

  it("For 525 and 2310...", () => {
    expect(largestCommonDivisor(525, 2310) == 105).toBeTruthy();
  });
});
