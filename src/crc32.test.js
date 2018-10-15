import { crc32 } from './crc32';

describe('crc32', () => {
  it('crc32 from string', () => {
    expect(crc32('hello')).toEqual(0x3610A686);
  });

  it('crc32 from other string', () => {
    expect(crc32('Hacktoberfest')).toEqual(0xDB9145DD);
  });
});
