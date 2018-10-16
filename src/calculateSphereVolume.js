export const calculateSphereVolume = (radius) => {
  // TO IMPLEMENT IN ANOTHER PR
  if (radius <= 0 || isNaN(radius)) return 'Radius needs to be a positive number!';

  return parseFloat(((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2));
};
