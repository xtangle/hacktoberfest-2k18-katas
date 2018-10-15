import { chunkString } from './chunkString';

/*
 * The chunkString function splits a string into substrings of the given length
 */

describe('chunkString', () => {
  it('chunkString returns undefined for non-strings', () => {
    expect(chunkString(1234, 4567)).toBeUndefined();
  });

  it('chunkString splits a string into chunks', () => {
    expect(chunkString('loremipsumdolorsitametloremipsum', 8)).toEqual(['loremips', 'umdolors', 'itametlo', 'remipsum']);
  });

  it('chunkString handles the remainder', () => {
    expect(chunkString('loremipsumdolorsitametloremipsum', 7)).toEqual(['loremip', 'sumdolo', 'rsitame', 'tloremi', 'psum']);
  });
});
