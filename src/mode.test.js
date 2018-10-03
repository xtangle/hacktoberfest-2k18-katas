import { mode } from './mode';

describe('mode', () => {
  it('mode([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return [-2, 5]', () => {
    expect(mode([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2])).toEqual([-2, 5]);
  });

  it('mode([5.3, 5.3, 1.9, 1.9, 5.3]) should return [5.3]', () => {
    expect(mode([5.3, 5.3, 1.9, 1.9, 5.3])).toEqual([5.3]);
  });
})