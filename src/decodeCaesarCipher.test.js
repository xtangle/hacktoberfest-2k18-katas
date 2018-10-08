import { decodeCaesarCipher } from './decodeCaesarCipher';

describe('decodeCaesarCipher', () => {
  it('returns the decoded string', () => {
    expect(decodeCaesarCipher('ghfrgh fhdvdu', 3)).toEqual('decode ceasar');
    expect(decodeCaesarCipher('hfs dtz ijhtij ymnx?', 5)).toEqual('can you decode this?');
    expect(decodeCaesarCipher('Vdds ydq strdsxcv iwt higxcvh', 15)).toEqual('Good job decoding the strings');
  });

  it('throws error when encoding length is not a number', () => {
    expect(() => decodeCaesarCipher('ghfrgh fhdvdu')).toThrow();
    expect(() => decodeCaesarCipher('ghfrgh fhdvdu', null)).toThrow();
    expect(() => decodeCaesarCipher('ghfrgh fhdvdu', [])).toThrow();
    expect(() => decodeCaesarCipher('ghfrgh fhdvdu', {})).toThrow();
    expect(() => decodeCaesarCipher('ghfrgh fhdvdu', NaN)).toThrow();
    expect(() => decodeCaesarCipher('ghfrgh fhdvdu', 'String')).toThrow();
  });

  it('throws error when encoded string is not a string', () => {
    expect(() => decodeCaesarCipher(undefined, 12)).toThrow();
    expect(() => decodeCaesarCipher(null, 12)).toThrow();
    expect(() => decodeCaesarCipher([], 12)).toThrow();
    expect(() => decodeCaesarCipher({}, 12)).toThrow();
    expect(() => decodeCaesarCipher(NaN, 12)).toThrow();
    expect(() => decodeCaesarCipher(5, 12)).toThrow();
  });
});
