import { duplicatedArgs } from './duplicatedArgs';

describe('duplicatedArgs', () => {
  test('should return true when duplicated', () => {
    expect(duplicatedArgs('first', 'first')).toEqual(true);
  });

  test('should return false when not duplicated', () => {
    expect(duplicatedArgs('first', 'second')).toEqual(false);
  });
});
