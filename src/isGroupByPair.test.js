import { isGroupByPair } from './isGroupByPair';

describe('isGroupByPair', () => {
  it('Should return true', () => {
    expect(isGroupByPair('[]')).toBeTruthy(); // TODO Your test instead
  });

  it('Should return true', () => {
    expect(isGroupByPair('{}')).toBeTruthy(); // TODO Your test instead
  });

  it('Should return true', () => {
    expect(isGroupByPair('()')).toBeTruthy(); // TODO Your test instead
  });

  it('Should return false', () => {
    expect(isGroupByPair('{}[])')).toBe(false); // TODO Your test instead
  });

  it('Should return false', () => {
    expect(isGroupByPair('{(}[])')).toBe(false); // TODO Your test instead
  });
})