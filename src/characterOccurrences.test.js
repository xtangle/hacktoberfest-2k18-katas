import { characterOccurrences } from './characterOccurrences';

describe('characterOccurrence', () => {
  it('should return the number of the selected character occurrences.', () => {
    expect(characterOccurrences("abcdefghijklmnop", 'a')).toEqual(1);
    expect(characterOccurrences("ABCDEFGHIJKLMNOP", 'A')).toEqual(1);
    expect(characterOccurrences("", 'A')).toEqual(0);
    expect(characterOccurrences("Mary had a little lamb.", 'a')).toEqual(4);
    expect(characterOccurrences("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 'i')).toEqual(6);
    expect(characterOccurrences("aaaaaaaaaaaaaaaaaaaaaaaaaa", 'a')).toEqual(26);
  });
});
