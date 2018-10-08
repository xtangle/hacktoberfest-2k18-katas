import { rot13 } from './rot13';

describe('rot13', () => {
  it('does nothing with empty string', () => {
    expect(rot13('')).toBe('');
  });

  it('rotates first 8 characters in alphabet', () => {
    expect(rot13('abcdefgh')).toBe('nopqrstu');
  });

  it('rot13 does a very cool thing...', () => {
    expect(rot13('stuvwxyz')).toBe('fghijklm');
  });
});
