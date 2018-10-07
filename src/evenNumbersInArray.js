export const evenNumbersInArray = (arr) => {
  // TO IMPLEMENT IN ANOTHER PR
  return arr.filter(number => {
    if (isNaN(number)) {
      throw 'Enter a valid array with numbers';
    }
    return number%2 === 0;
  });
};
