// Given a string 's' and a length 'n', split 's' into
// strings which have exactly 'n' characters. Center the strings
// and fill with spaces. If the string cannot be completely centered,
// the left side is prefered. Return array of proceeded strings.
export const centerText = (s, n) => {
  let splitString = s.split(' ');
  let sections = [];
  let counter = 0;
  let concatenated = '';
  let result = [];

  splitString.map((word, index) => {

    // Account for spaces between words, if not the first word in section.
    if (counter > 0) {
      word = ' ' + word;
    }

    counter = counter + word.length;

    // This next word overflows the limit, return with what we have, commit string to section array.
    if (counter > n) {
      sections.push(concatenated.trim());
      concatenated = '';
      word = word.trim();
      counter = word.length;
    }

    // Special case for end of string.
    if (index + 1 === splitString.length) {
      concatenated += word;
      sections.push(concatenated.trim());
      concatenated = '';
      word = word.trim();
      counter = word.length;
      return;
    }

    concatenated += word;
  });


  // Pad the sections that need it.
  sections.map((str, index) => {
    if (str.length !== n) {
      const difference = n - str.length;
      const pad = difference / 2;
      let padLeft = pad;
      let padRight = pad;

      if (pad % 1 > 0) {
        padLeft = pad - 0.5;
        padRight = pad + 0.5;
      }

      str = ' ' . repeat(padLeft) + str + ' ' . repeat(padRight);
    }

    result.push(str);
  });

  return result;
}
