export const isValidPalindrome = str => {
  if (!str || str.trim().length === 0) return false;

  str = str.trim();

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }

  return true;
};