import { sortNames } from './sortNames';

describe('sortNames', () => {
  it('the sorted names Nathan, Bob, Jessica should be Bob, Jessica, Nathan', () => {
    expect(sortNames(['Nathan', 'Bob', 'Jessica'])).toEqual([
      'Bob',
      'Jessica',
      'Nathan',
    ]);
  });

  it('the sorted names Jacob, Alice, Abbie should be Abbie, Alice, Jacob', () => {
    expect(sortNames(['Jacob', 'Alice', 'Abbie'])).toEqual([
      'Abbie',
      'Alice',
      'Jacob',
    ]);
  });
});
