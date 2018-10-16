import { isSquareMatrix } from './isSquareMatrix';

describe('isSquareMatrix', () => {
    it('check if a matrix is a square matrix', () => {

        const matrix = [[1, 2], [2, 1]];
        const isSquareMatrix_test = isSquareMatrix(matrix);

        expect(isSquareMatrix_test).toEqual(true);
    });
});
