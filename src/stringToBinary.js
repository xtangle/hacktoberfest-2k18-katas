export const stringToBinary = ( string ) => {
  if ( !string || string === ' ' ) {
    return null;
  }
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push( string.charCodeAt( i ).toString( 2 ).padStart( 8, '0' ));
  }
  return result.join( ' ' );
};