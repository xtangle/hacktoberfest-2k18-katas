/*
 * @param number
 * 
 * @return number
 */
export const reverseNumber = (n) => {
  const result = [];
  
  n.toString().split('').forEach(item => {
    result.unshift(item)
  });

  return Number(result.join(''));
};