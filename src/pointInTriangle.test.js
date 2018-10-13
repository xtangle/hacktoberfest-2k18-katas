import { pointInTriangle } from './pointInTriangle';

describe('pointInTriangle', () => {
  let validTriangle = {x0: 1., y0: 1., x1: 3., y1: 2., x2: 2., y2: 3.};

  it('tests if a point is in a triangle.', () => {
    expect(pointInTriangle({x: 2., y: 2.}, validTriangle)).toStrictEqual(true);
    expect(pointInTriangle({x: 1., y: 3.}, validTriangle)).toStrictEqual(false);
  });

  it('throws if point is invalid', () => {
    expect(() => pointInTriangle({x: 2.}, validTriangle)).toThrow();
    expect(() => pointInTriangle({x: 2., y: NaN}, validTriangle)).toThrow();
    expect(() => pointInTriangle(validTriangle)).toThrow();
  });

  it('throws if triangle is invalid or degenerate', () => {
    expect(() => pointInTriangle({x: 2., y: 2.})).toThrow();
    expect(() => pointInTriangle({x: 2., y: 2.},{x0: 1., y0: 1.})).toThrow();
    expect(() => pointInTriangle({x: 2., y: 2.},{x0: 1., y0: 1., x1: 2., y1: 2., x2: 3., y2: 3.})).toThrow();
  });
});
