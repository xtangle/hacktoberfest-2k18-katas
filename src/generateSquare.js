export const generateSquare = (sideLength) => {
  switch (sideLength) {
    case 0:
      return [];
    case 1:
      return ['*'];
    default: {
      const square = [];
      square.push('*'.repeat(sideLength));

      for (let i = 2; i < sideLength; i++) {
        square.push('*' + ' '.repeat(sideLength - 2) + '*');
      }

      square.push('*'.repeat(sideLength));

      return square;
    }
  } 
};
