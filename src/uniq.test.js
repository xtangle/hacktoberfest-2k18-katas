import { uniq } from './uniq';

describe('uniq', () => {
  it('Returns array with unique values', () => {
    var array = [1, 1, 1, 1, 7];
    var result = [1, 7];
    expect(uniq(array)).toEqual(result);
  });

  it('Returns array with unique values', () => {
    var array = [1, 2, 3, 4, 5, 6, 6];
    var result = [1, 2, 3, 4, 5, 6];
    expect(uniq(array)).toEqual(result);
  });
})
