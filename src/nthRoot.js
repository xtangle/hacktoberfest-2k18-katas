export const nthRoot = (number, root) => {
  if ( Number.isInteger( root ) && root > 0 ) {
    return Math.pow( number, ( 1/root ))
  }
};