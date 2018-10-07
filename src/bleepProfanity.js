export const bleepProfanity = (input) => {
  const badWords = [ 'crap', 'dick', 'fuck' ];

  badWords.forEach((word) => {
    input = input.replace(word, '#$@!');
  });
  return input;
};