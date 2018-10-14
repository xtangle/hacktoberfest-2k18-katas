export const pointInTriangle = (point, triangle) => {
  if (isNaN(point.x) || isNaN(point.y)) {
    throw "Point coordinates are not numeric values";
  };

  if (isNaN(triangle.x0) || isNaN(triangle.y0) ||
      isNaN(triangle.x1) || isNaN(triangle.y1) ||
      isNaN(triangle.x2) || isNaN(triangle.y1)) {
    throw "Triangle coordinates are not numeric values";
  };

  const A = triangleArea({...triangle});

  //from https://math.stackexchange.com/questions/937768/how-to-determine-if-a-triangle-can-be-drawn-with-the-given-points

  if (A === 0) {
    throw "Triangle is degenerate";
  }

  //from https://www.youtube.com/watch?v=H9qu9Xptf-w
  const A1 = triangleArea({
    x0: point.x, 
    y0: point.y, 
    x1: triangle.x0,
    y1: triangle.y0,
    x2: triangle.x1,
    y2: triangle.y1
  });

  const A2 = triangleArea({
    x0: point.x, 
    y0: point.y, 
    x1: triangle.x2,
    y1: triangle.y2,
    x2: triangle.x1,
    y2: triangle.y1
  });

  const A3 = triangleArea({
    x0: point.x, 
    y0: point.y, 
    x1: triangle.x0,
    y1: triangle.y0,
    x2: triangle.x2,
    y2: triangle.y2
  });

  return A === A1 + A2 + A3;
};

const triangleArea = ({x0, y0, x1, y1, x2, y2}) => {
  return Math.abs(((x0*(y1-y2)+x1*(y2-y0)+x2*(y0-y1))/2.0));
};