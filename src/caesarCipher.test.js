import { caesarCipher } from './caesarCipher';

describe('caesarCipher', () => {
  const message = "We are awesome"
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const shift = 3
  it('caesarCipher encrypts the message', () => {
    expect(caesarCipher(message, alphabet, shift)).toEqual("Zh duh dzhvrph");
  });

  it('caesarCipher decrypts a message', () => {
    var encryption = "Mu qhu qmuiecu"
    var key = 16
    expect(caesarCipher(encryption, alphabet, key)).toEqual("We are awesome");
  });

  it('caesarCipher throws an error on numbers', () => {
    var bad_message = "1 We are awesome"
    expect(() => { caesarCipher(bad_message, alphabet, shift); }).toThrow("Invalid input '1' at index 0");
  });
});
