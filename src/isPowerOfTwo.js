export const isPowerOfTwo = x => {
  if( x == 1) return true
  return x % 2 == 0 ? isPowerOfTwo(x/2) : false
};
