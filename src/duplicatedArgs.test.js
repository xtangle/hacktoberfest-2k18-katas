import { duplicatedArgs } from './duplicatedArgs';

describe('duplicatedArgs', () => {
  test('should return true when duplicated', () => {
    expect(duplicatedArgs('first', 'first')).toEqual(true);
    expect(
      duplicatedArgs(
        'abc',
        'abc',
        'abc',
        '123',
        'abc',
        '123',
        'abc',
        'abc',
        '123',
      ),
    ).toEqual(true);
  });

  test('should return false when not duplicated', () => {
    expect(duplicatedArgs('first', 'second')).toEqual(false);
    expect(
      duplicatedArgs('first', 'second', 'third', 'fourth', 'fifth', 'sixth'),
    ).toEqual(false);
  });
});
