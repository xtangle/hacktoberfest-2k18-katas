export const atbash = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetCaps = alphabet.toUpperCase();
  const alphabetCharacters = (alphabet + alphabetCaps).split('');
  const reversedAlphabetCharacters = alphabet.split('').reverse().concat(
    alphabetCaps.split('').reverse()
  );

  const characters = string.split('');

  const encodedCharacters = characters.map(character => {
    const isAlphabetic = alphabetCharacters.includes(character);

    if (!isAlphabetic) {
      return character;
    }

    const index = alphabetCharacters.findIndex(element => element === character);
    return reversedAlphabetCharacters[index];

  });

  return encodedCharacters.join('');
};
