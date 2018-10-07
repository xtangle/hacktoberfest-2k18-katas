import { combinationModPrime } from './combinationModPrime';


describe('combinationModPrime', () => {
  it('works with small numbers', () => {
    let combinations = combinationModPrime(4,2);
    expect(combinations).toEqual(6);

    combinations = combinationModPrime(12,5);
    expect(combinations).toEqual(792);

    combinations = combinationModPrime(7,3);
    expect(combinations).toEqual(35);
  });

  it('works with large numbers', () => {
    let combinations = combinationModPrime(1000,5);
    expect(combinations).toEqual(291192450);

    combinations = combinationModPrime(10000,79);
    expect(combinations).toEqual(44739176);

    combinations = combinationModPrime(9877,4533);
    expect(combinations).toEqual(364034347);
  });

});
