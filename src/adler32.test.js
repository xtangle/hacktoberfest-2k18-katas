import { adler32 } from './adler32';

describe('adler32', () => {
  it('adler32 from string', () => {
    expect(adler32('hello')).toEqual(0x62C0215);
  });

  it('adler32 from other string', () => {
    expect(adler32('Hacktoberfest')).toEqual(0x23A30546);
  });
});
