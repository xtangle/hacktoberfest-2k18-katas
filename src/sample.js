export const sample = (input) => {
  // TO IMPLEMENT IN ANOTHER PR
  if (!Array.isArray(input)) return false;
  if (input === []) return false;
  const index = Math.random() * input.length;
  return input[index];
};
