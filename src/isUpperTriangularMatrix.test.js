import { isUpperTriangularMatrix } from './isUpperTriangularMatrix';

describe('isUpperTriangularMatrix', () => {
    it('check if a matrix is a square matrix', () => {

        const matrix = [[1, 2], [0, 1]];
        const isSquareMatrix_test = isUpperTriangularMatrix(matrix);

        expect(isSquareMatrix_test).toEqual(true);
    });
});
