export const romanToInteger = (romanString) => {
  if (romanString == null) return -1;
  let num = char_to_int(romanString.charAt(0));
  let previousChar, currentChar;

  for (let i = 1; i < romanString.length; i++) {
    currentChar = char_to_int(romanString.charAt(i));
    previousChar = char_to_int(romanString.charAt(i - 1));
    if (currentChar <= previousChar) {
      num += currentChar;
    } else {
      num = num - previousChar * 2 + currentChar;
    }
  }

  return num;

  function char_to_int(c) {
    switch (c) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return -1;
    }
  }
};