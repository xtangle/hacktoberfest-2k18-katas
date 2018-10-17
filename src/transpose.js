export const transpose = (matrix) => {
  if(matrix[0][0] === null || matrix[0][0] === undefined || !(matrix instanceof Array))
  	throw new Error(undefined);

  var width = (matrix.length || 0);
  var height = (matrix[0] instanceof Array) ? matrix[0].length : 0;

  var transpose = [];
  for(var i = 0; i < height; i++){
  	transpose[i] = [];
    for(var j = 0; j < width; j++)
    	transpose[i][j] = matrix[j][i];
  }
  return transpose;
};