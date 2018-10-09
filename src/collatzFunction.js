export const collatzFunction = ( number ) => {
  if ( !Number.isInteger( number ) || number <= 0 ) {
    return -1;
  }

  let count = 0;

  (function getCollatz( num ) {
    if ( num === 1 ) {
      return;
    } else if ( num % 2 > 0 ) {
      // Odd
      count++;
      getCollatz(( num * 3 ) + 1 );
    } else {
      // Even
      count++;
      getCollatz( num / 2 );
    }
  })( number )

  return count;
};
