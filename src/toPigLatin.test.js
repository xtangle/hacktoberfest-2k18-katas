import { toPigLatin } from './toPigLatin';

describe('toPigLatin', () => {
  it('transforms a simple word into Pig Latin', () => {
    expect(toPigLatin('hacktoberfest')).toBe('acktoberfesthay');
  });

  it('transforms a simple phrase into Pig Latin', () => {
    expect(toPigLatin('hello world')).toBe('ellohay orldway');
  });

  it('handles for consonant clusters', () => {
    expect('this rocks').toBe('isthay ocksray');
  });

  it('handles for words beginning with a vowel', () => {
    expect('one last test').toBe('oneway astlay esttay');
  });
})
