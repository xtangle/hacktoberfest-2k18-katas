export const numToDescendingOrder = (num) => {
  if(isNaN(num) || num  == undefined || num == true) {
    return null;
  }
    
  /* Reverse Order */
  var newNum = 0;

  while(num != 0) {
    newNum *= 10;
    newNum += num % 10;
    num = Math.floor(num / 10);
  }

  return newNum;
};
