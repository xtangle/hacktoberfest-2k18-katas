/*
 * @param string
 * 
 * @return string
 */
export const evalReversePolishNotation = (str) => {
  if (!str) throw new Error('Please give a string');

  const isOperator = (/^(\+|-|\*|\/)$/i);
  const isNumber = (/^[0123456789]$/i);
  const numbersList = [];
  const operatorsList = [];

  const splittedStr = str.split('').filter(item => item !== ' ');
  splittedStr.forEach(item => {
    if (isOperator.test(item)) {
      return operatorsList.push(item)
    } else if (isNumber.test(item)) {
      return numbersList.push(item)
    }
    throw new Error('Please try with a valid string, only numbers and operators')
  });

  if (operatorsList.length > 1) {
    return computeResult(numbersList.reverse(), operatorsList);
  }

  return computeResult(numbersList, operatorsList);
};

/*
* @param array
* @param array
*
* @return number
*/
const computeResult = (listNumbers, listOperators) => {
  const result = [];

  listNumbers.forEach((item, index) => {
    result.push(Number(item));
    if (index < listOperators.length) {
        result.push(listOperators[index])
    }
  })

  if (listOperators.length > 1) {
    const firstPart = eval([result[0], result[1], result[2]].join(''));
    return eval([firstPart, result[3], result[4]].join(''));
  } else {
    return eval(result.join(' '));
  }
}