import { alphabetizeString } from './alphabetizeString';

describe('alphabetizeString', () => {
  it('alphabetizes the strings', () => {
    expect(alphabetizeString('Hacktoberfest 2018!')).toEqual('!0128Habceefkorstt');
    expect(alphabetizeString('10987654321')).toEqual('01123456789');
    expect(alphabetizeString('the quick brown fox jumped over the lazy dog')).toEqual('abcddeeeefghhijklmnoooopqrrttuuvwxyz');
    expect(alphabetizeString('abcdefghijklmnopqrstuvwxyz')).toEqual('abcdefghijklmnopqrstuvwxyz');
  });

  it('fails on invalid parameters', () => {
    expect(() => alphabetizeString(123)).toThrow();
    expect(() => alphabetizeString([])).toThrow();
    expect(() => alphabetizeString({})).toThrow();
    expect(() => alphabetizeString(null)).toThrow();
  });
});
