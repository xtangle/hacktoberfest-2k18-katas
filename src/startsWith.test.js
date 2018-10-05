import { startsWith } from './startsWith';

describe('startsWith', () => {
  it('checks if a string starts with a value', () => {
    expect(startsWith('a', 'apple')).toBeTruthy();
  });

  it('checks if an array starts with a value', () => {
    expect(startsWith([1, 2, 3], 1)).toBeTruthy();
  });
})
