export const xbonacci = (seed, position) => {
  if (!position || !seed || !Array.isArray(seed) || !seed.length || seed.includes(null)) {
    throw new Error();
  }

  const len = seed.length;
  let currPosition = len;
  while (currPosition < position) {
    let sum = seed.slice(seed.length - len).reduce((a, b) => a + b, 0);
    seed.push(sum);
    currPosition = seed.length;
  }

  return seed[position - 1];
};
