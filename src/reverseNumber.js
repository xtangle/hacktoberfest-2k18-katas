/*
 * @param number
 * 
 * @return number
 */
export const reverseNumber = (number) => {
  const result = [];
  
  number.toString().split('').forEach(item => {
    result.unshift(item)
  });

  return Number(result.join(''));
};