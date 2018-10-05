import { isRemainder } from './isRemainder';

describe('isRemainder', () => {
  it('checks if the remainder is equal to the first argument', () => {
    expect(isRemainder(1, 3, 2)).toBeTruthy();
  });

  it('checks if the remainder is equal to the first argument', () => {
    expect(isRemainder(2, 5, 3)).toBeTruthy();
  });

  it('checks if the remainder is equal to the first argument', () => {
    expect(isRemainder(1, 5, 2)).toBeTruthy();
  });

})
