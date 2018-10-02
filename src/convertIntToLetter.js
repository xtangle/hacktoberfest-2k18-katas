export const convertIntToLetter = arr => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return arr.filter(num => num <= 25).map(num => alphabet[num]);
};