import { isLowerTriangularMatrix } from './isLowerTriangularMatrix';

describe('isLowerTriangularMatrix', () => {
    it('check if a matrix is a lower triangular matrix', () => {
        const m1 = [
            [1, 0],
            [2, 1]
        ];
        const m2 = [
            [1, 0, 0],
            [2, 1, 5],
            [3, 3, 1]
        ];
        const m3 = [
            [1, 0, 0, 0],
            [2, 5, 0, 0],
            [7, 3, 1, 0],
            [2, 4, 2, 6]
        ];
        const m4 = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        expect(isLowerTriangularMatrix(m1)).toEqual(true);
        expect(isLowerTriangularMatrix(m2)).toEqual(false);
        expect(isLowerTriangularMatrix(m3)).toEqual(true);
        expect(isLowerTriangularMatrix(m4)).toEqual(true);
    });
});
