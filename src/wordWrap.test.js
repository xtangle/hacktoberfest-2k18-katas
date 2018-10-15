import { wordWrap } from './wordWrap';

/*
 * The wordWrap function is given a string and a number of characters. It
 * should word wrap the string into lines of the given maximum length and
 * return those lines as an array of strings. If a single word is too long to
 * fit into the given line length, simply "give up" and have that word on its
 * own on a line that's longer than desired.
 */

describe('wordWrap', () => {
  it('wordWrap wraps some text', () => {
    expect(wordWrap('Lorem ipsum dolor sit amet', 13)).toEqual([
        'Lorem ipsum',
        'dolor sit',
        'amet'
    ]);
  });

  it('wordWrap returns only one line when there is nothing to do', () => {
    expect(wordWrap('Lorem ipsum dolor sit amet', 26)).toEqual([
        'Lorem ipsum dolor sit amet'
    ]);
  });

  it('wordWrap gives up when a word is too long', () => {
    expect(wordWrap('Lorem ipsum dolor consectetur sit amet', 8)).toEqual([
        'Lorem',
        'ipsum',
        'dolor',
        'consectetur',
        'sit amet'
    ]);
  });
});
