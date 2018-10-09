export const decodeCaesarCipher = (encodedString, encodingLength) => {
  if (typeof encodedString !== "string" || typeof encodingLength !== "number" || isNaN(encodingLength)) {
    throw new Error();
  }
  
  const upperCaseOffset = 32;
  const charCodeAt_A = 65;
  const lettersInAlphabet = 26;
    
  const translateCharCode = (letter, charCodeToSubtract) => {
    let lowerCharCode = charCodeAt_A;
    if (letter !== letter.toUpperCase()) {
      lowerCharCode += upperCaseOffset;
    }
    const charCodeAfterSubtraction = letter.charCodeAt(0) - lowerCharCode - charCodeToSubtract;
    const newLetterInAlphabet = charCodeAfterSubtraction >= 0 ?
      charCodeAfterSubtraction :
      lettersInAlphabet + charCodeAfterSubtraction ;
    return String.fromCharCode(newLetterInAlphabet + lowerCharCode);
  }
  
  const isLetter = letter => {
    const charCode = letter.charCodeAt(0);
    return (charCode >= charCodeAt_A && charCode <= charCodeAt_A + lettersInAlphabet) ||
      (charCode >= charCodeAt_A + upperCaseOffset && charCode <= charCodeAt_A + upperCaseOffset + lettersInAlphabet);
  }
  
  return Array.from(encodedString)
    .map(letter => {
      let newLetter = letter
      if (isLetter(letter)) {
        newLetter = translateCharCode(letter, encodingLength)
      }
      return newLetter
    })
    .join('');
};
