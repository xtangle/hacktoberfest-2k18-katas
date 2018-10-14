export const isLowerTriangularMatrix = matrix => {
    for(let i=0; i<matrix.length; ++i) {
		let shallWeContinue = isValidRow(matrix[i], i)
		if(!shallWeContinue) {
			return false
		}
    }
    return true;
};

const isValidRow = (row, index) => {
	for(let i=index+1; i<row.length; ++i) {
		if(row[i] != 0) {
			return false
		}
	}
	return true
}