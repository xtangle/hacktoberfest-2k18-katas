/*
 * @param string
 * 
 * @return string
 */
export const toPigLatin = (str) => {
  if (typeof str !== 'string') throw new Error('Try again with a string');

  const strContent = str.split(' ');

  if (strContent.length > 1) {
    const newStr = [];

    strContent.forEach(word => {
      newStr.push(transformToPigLatin(word))
    })

    return newStr.join(' ');
  }

  return transformToPigLatin(str);
}

/*
 * @param string
 * 
 * @return string
 */
const transformToPigLatin = (str) => {
  const isConsonant = (/^[bcdfghjklmnpqrstvwzyz]$/i);
  const isVowell = (/^[aeiou]$/i);

  if (
    isConsonant.test(str.slice(0, 1)) 
    && isConsonant.test(str.slice(1, 2))
  ) {
    return str.slice(2, str.length).concat(str.slice(0, 2), 'ay');
  } 
  else if (isConsonant.test(str.slice(0, 1))) {
    return str.slice(1, str.length).concat(str.slice(0, 1), 'ay');
  }
  else if (isVowell.test(str.slice(0, 1))) {
    return str.concat('way');
  }

  throw new Error(`${str} is not a valid string, can only contain letters.`);
}