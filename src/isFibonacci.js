export const isFibonacci = (num) => {
  //num is Fibonacci if (5*n^2 + 4) or (5*n^2 – 4) is perfect square

  function isSquare(number){
    return number > 0 && Math.sqrt(number) % 1 === 0;
  }
  var n = parseInt(num,10);
  if(!(Math.round(Number(n)) === n))
    return false;

  if(isSquare(5 * (n * n) + 4) || isSquare(5 * (n * n) - 4)) 
    return true;
  else
    return false;

};
