const isSquareMatrix = matrix => matrix.reduce((acc, row) => row.length === matrix.length && acc, true);

const sumOfDiagonals = matrix => matrix.reduce((acc, rows, currIndex) => acc + rows[currIndex], 0);

export const matrixTrace = (...params) => {
  // Handle the case when just rows are passed arguments
  let matrix;
  if (params.length === 1) {
    [matrix] = params;
  } else {
    matrix = params;
  }

  const [row] = matrix;
  if (matrix.length === 0 || row.length === 0) {
    return 0;
  }

  if (!isSquareMatrix(matrix)) {
    throw new Error('The matrix should be square!');
  }

  return sumOfDiagonals(matrix);
};
