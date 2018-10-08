export const pascalTriangle = row => {
  let triangle = [];

  for (let i = 0; i < row + 1; i++) {
    triangle[i] = new Array(i+1);

    for (let j = 0; j < i+1; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
      }
    }
  }

  return triangle;
};
