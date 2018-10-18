import { circumcentre } from './circumcentre';

describe('circumcentre', () => {
  it('circumcentre should return a point equidistant from all three points', () => {
    expect(circumcentre(0, 0, 10, 10, 0, 10)).toEqual({x: 5, y:5});
    expect(circumcentre(0, 0, 10, 10, 10, 0)).toEqual({x: 5, y:5});
    expect(circumcentre(0, 0, 10, 0, 0, 10)).toEqual({x: 5, y:5});
    expect(circumcentre(10, 10, 10, 0, 0, 10)).toEqual({x: 5, y:5});
    expect(circumcentre (50, 40, 20, 30, 40, 10)).toEqual({x: 37.5, y:27.5});
  });

  it('circumcentre will return null if the points are collinear (and therefore the circumcentre is undefined)', () => {
    expect(circumcentre(0, 0, 0, 0, 0, 0)).toBeNull();
    expect(circumcentre(10, 10, 10, 10, 0, 10)).toBeNull();
    expect(circumcentre(10, 10, 10, 20, 10, 30)).toBeNull();
    expect(circumcentre(0, 0, 3, 6, 100, 200)).toBeNull();
  });
});
