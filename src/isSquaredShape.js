export const isSquaredShape = (shape) => {

  if (typeof shape !== 'string' || shape === '') {
    return false
  }

  const parsedShape = shape.split('').filter(i => i !== '\n')
  const width = parsedShape.findIndex(i => i === ' ') - 1

  if (parsedShape.length === (width * width)) {
    return true
  }

  return false;
};
