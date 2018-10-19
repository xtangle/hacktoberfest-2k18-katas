export const vectorProjection = ({ projectedVector, basisVector }) => {
  let a = basisVector, b = projectedVector;

  if (typeof a === 'number' && typeof b === 'number') {
    return b * ((a * b) / (b * b));
  }

  if (a.length !== b.length)
    throw new Error('Unequal length of vectors');

  a = Array.from(a);
  b = Array.from(b);

  let p = 0, m = 0;
  for (let i = 0; i < a.length; i++) {
    p += a[i] * b[i];
    m += b[i] * b[i];
  }
  let t = p / m;

  let r = [];
  for (let i = 0; i < b.length; i++) {
    r.push(b[i] * t);
  }

  return r;
};
