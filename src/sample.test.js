import { sample } from './sample';

describe('sample', () => {
  it('sample return the one random element from the list', () => {
    const test = [1, 2, 3, 4, 5];
    expect(sample(test)).not.toBeNull();
  });

  it('sample return the false with empty array', () => {
    expect(sample([])).toBeFalsy();
  });

  it('sample return the false with param not an array', () => {
    expect(sample(null)).toBeFalsy();
    expect(sample(true)).toBeFalsy();
    expect(sample('test')).toBeFalsy();
  });
});
