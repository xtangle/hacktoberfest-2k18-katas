export const isSquareMatrix = (matrix) => {
    if (!Array.isArray(matrix)) return false;
    for (const row of matrix) {
        if (!row || row.length !== matrix.length) return false;
    }
    return true;
};