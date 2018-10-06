import { rotateRight } from './rotateRight';

describe('rotateRight', () => {
  it('Should return true', () => {
    expect(rotateRight([1, 2, 3, 4, 5], 2)).toBe([4, 5, 1, 2, 3]); // TODO Your test instead
  });

  it('Should return true', () => {
    expect(rotateRight([0, 1, 2], 4)).toBe([2, 0, 1]); // TODO Your test instead
  });

})