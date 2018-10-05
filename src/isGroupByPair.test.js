import { isGroupByPair } from './isGroupByPair';

describe('isGroupByPair', () => {
  it('Should return true', () => {
    expect('[]').toBeTruthy(); // TODO Your test instead
  });

  it('Should return true', () => {
    expect('{}').toBeTruthy(); // TODO Your test instead
  });

  it('Should return true', () => {
    expect('()').toBeTruthy(); // TODO Your test instead
  });

  it('Should return false', () => {
    expect('{}[])').toBe(false); // TODO Your test instead
  });

  it('Should return false', () => {
    expect('{[)]}').toBe(false); // TODO Your test instead
  });
})