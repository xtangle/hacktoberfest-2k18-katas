import {longestWord} from './longestWord';

describe('longestWord', () => {
    it('returns the longest valid word in the string', () => {
        expect(longestWord("the longest word is punctuation!")).toEqual("punctuation");
        expect(longestWord("the longest word is punctuation! 123456789012")).toEqual("punctuation");
        expect(longestWord("the $!!longest##£ word is punctuation!")).toEqual("punctuation");
    });

    it('returns null if a string is not passed', () => {
        expect(longestWord()).toEqual(null);
        expect(longestWord(null)).toEqual(null);
        expect(longestWord(12)).toEqual(null);
        expect(longestWord({test : "test"})).toEqual(null);
    });

});