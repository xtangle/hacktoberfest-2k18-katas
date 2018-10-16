export const isValidAnagram = (a, b) => {
  let aLetters = a.split('').sort().join('');
  let bLetters = b.split('').sort().join('');

  if (aLetters === bLetters) {
    return true;
  } else {
    return false;
  }
};
