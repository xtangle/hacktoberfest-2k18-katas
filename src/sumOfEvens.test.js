import { sumOfEvens } from './sumOfEvens';

describe('sumOfEvens', () => {
  it('For [1,3,7,12,15]', () => {
    expect(sumOfEvens([1,3,7,12,15]) == 12).toBeTruthy();
  });

  it('For [1,13,35,27,9]', () => {
    expect(sumOfEvens([1,13,35,27,9]) == 0).toBeTruthy();
  });

  it('For [12,22,33,4]', () => {
    expect(sumOfEvens([12,22,33,4]) == 38).toBeTruthy();
  });
});
