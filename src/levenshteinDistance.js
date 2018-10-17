export const levenshteinDistance = (string, string2) => {
  if (!isString(string) || !isString(string2))
    throw new Error("Both arguments should be strings");

  string = string.trim();
  string2 = string2.trim();

  let distances = Array.from({ length: string.length + 1 }, (_, i) =>
    Array.from({ length: string2.length + 1 }, (_, j) => {
      if (i === 0) return j;
      if (j === 0) return i;
      return 0;
    })
  );

  for (let j = 1; j < string2.length + 1; j++) {
    for (let i = 1; i < string.length + 1; i++) {
      if (string[i - 1] === string2[j - 1])
        distances[i][j] = distances[i - 1][j - 1];
      else
        distances[i][j] = Math.min(
          distances[i - 1][j] + 1,
          distances[i][j - 1] + 1,
          distances[i - 1][j - 1] + 1
        );
    }
  }

  return distances[string.length][string2.length];
};

function isString(arg) {
  return arg && typeof arg === "string";
}
