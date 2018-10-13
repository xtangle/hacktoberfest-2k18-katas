export const isUpperTriangularMatrix = matrix => {
    if (!Array.isArray(matrix)) return false;
    for (const r in matrix) {
        const row = matrix[r];
        if (!row || row.length !== matrix.length) return false;
        for (let i = 0; i < r; i++) {
            if (row[i] !== 0) return false;
        }
    }
    return true;
};
