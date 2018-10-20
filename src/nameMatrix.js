const findSquare = (length, n = 1) => {
  if (n*n >= length) {
    return n;
  }
  return findSquare(length, n+1);
};

const assembleMatrix = (name, root) => {
 const matrixCol = [...Array(root)].map((_, i) => i);
 return matrixCol.map(
   (_, rowIndex, _arr) =>  matrixCol.map((_, colIndex) => {
      const indexLength = colIndex + rowIndex * _arr.length;
      return (indexLength < name.length)
        ? name[indexLength]
        : '-';
   }),
  );
}

export const nameMatrix = (name) => {
  const square = findSquare(name.length);
  return assembleMatrix(name, square);
};
