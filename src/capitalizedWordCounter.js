export const capitalizedWordCounter = (str) => {
  const firstLetters = str.split(' ').map(word => word[0]).join('');
  return (firstLetters.match(/[A-Z]/g) || []).length;
};
