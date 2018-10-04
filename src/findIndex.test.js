import { findIndex } from './findIndex';

const isPair = function(n) {
  if (n % 2 === 0) {
    return true;
  }

  return false;
}

describe('findIndex', () => {
  it('find first pair number', () => {
    expect(findIndex([1, 3, 4, 5], isPair)).toEqual(2); // TODO Your test instead
  });

  it('return an -1 when not found', () => {
    expect(findIndex([1, 3, 5, 7], isPair)).toEqual(-1); // TODO Your test instead
  });
})
