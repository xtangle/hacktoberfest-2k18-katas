export const calculateRectangleAreas = (elements) => {
  return elements.map(element=> element.reduce((a,b) => a*b));
}
