import { hashtagGen } from './hashtagGen';

describe('hashtagGen', () => {
  it('generates hashtags', () => {
    expect(hashtagGen('  hacktoberfest   ')).toEqual('#Hacktoberfest');
  });

  it('generates long hashtags', () => {
    expect(hashtagGen('make hacktoberfest great again')).toEqual('#MakeHacktoberfestGreatAgain');
  });

  it('returns null if input is undefined', () => {
    expect(hashtagGen()).toBeNull();
  });

  it('returns null if input is blank', () => {
    expect(hashtagGen(' '.repeat(42))).toBeNull();
  });
});
