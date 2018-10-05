export const floodArea = (area, x, y) => {
  if (area[y] === undefined || area[y][x] !== ' ') {
    return area;
  }
  
  let row = area[y];

  area[y] = row.substr(0, x) + '~' + row.substr(x + 1);

  area = floodArea(area, x + 1, y);
  area = floodArea(area, x - 1, y);
  area = floodArea(area, x, y + 1);
  area = floodArea(area, x, y - 1);

  return area;
};