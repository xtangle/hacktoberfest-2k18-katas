import { isSquaredShape } from './isSquaredShape';

const isSquare5 = `
*****
*   *
*   *
*   *
*****
`

const isSquare3 = `
***
* *
***
`

const isNotSquare = `
****
*  *
****
`

describe('isSquaredShape', () => {
  it('isSquaredShape does detects if a string is depicting a square', () => {
    expect(isSquaredShape(isSquare3)).toEqual(true)
    expect(isSquaredShape(isSquare5)).toEqual(true)
  });

  it('isSquaredShape returns false if the argument is an empty string or not a string', () => {
    expect(isSquaredShape('')).toEqual(false)
    expect(isSquaredShape([])).toEqual(false)
  });

  it('isSquaredShape correctly detects a non-square shape', () => {
    expect(isSquaredShape(isNotSquare)).toEqual(false)
  });
});
