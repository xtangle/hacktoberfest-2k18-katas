/*
 * The wordWrap function is given a string and a number of characters. It
 * should word wrap the string into lines of the given maximum length and
 * return those lines as an array of strings. If a single word is too long to
 * fit into the given line length, simply "give up" and have that word on its
 * own on a line that's longer than desired.
 */

export const wordWrap = (input, lineLength) => {
  const words = input.split(' ');

  return words.reduce((lines, word) => {
    const currentLine = lines[lines.length - 1];

    if (!currentLine) {
      lines.push(word);
      return lines;
    }

    const nextLineLength = currentLine.length + 1 + word.length;

    if (nextLineLength <= lineLength) {
      lines[lines.length - 1] = `${currentLine} ${word}`;
    } else {
      lines.push(word);
    }

    return lines;
  }, []);
};
