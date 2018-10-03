import {shortestWord} from './shortestWord';

describe('shortestWord', () => {
    it('returns the shortest valid word in the string', () => {
        expect(shortestWord("the shortest word is punctuation!")).toEqual("is");
        expect(shortestWord("the shortest word is punctuation! 123456789012")).toEqual("is");
        expect(shortestWord("the $!!shortest##£ word is punctuation!")).toEqual("is");
    });

    it('returns null if a string is not passed', () => {
        expect(shortestWord()).toEqual(null);
        expect(shortestWord(null)).toEqual(null);
        expect(shortestWord(12)).toEqual(null);
        expect(shortestWord({test : "test"})).toEqual(null);
    });

});