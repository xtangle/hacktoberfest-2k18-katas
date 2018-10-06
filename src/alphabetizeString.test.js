import { alphabetizeString } from "./alphabetizeString";

describe("alphabetizeString", () => {

    test('alphabetizeString("abcd") should return "abcd"', () => {
        expect(alphabetizeString("abcd")).toEqual("abcd");
    });

    test('alphabetizeString("github") should return "bghitu"', () => {
        expect(alphabetizeString("github")).toEqual("bghitu");
    });

    test('alphabetizeString("hacktoberfest is the coolest!!") should return "!!abcceeeefhhiklooorssstttt"', () => {
        expect(alphabetizeString("hacktoberfest is the coolest!!")).toEqual("!!abcceeeefhhiklooorssstttt");
    });

    test('alphabetizeString("i love me some code katas =)") should return ")=aacdeeeeiklmmooosstv"', () => {
        expect(alphabetizeString("i love me some code katas =)")).toEqual(")=aacdeeeeiklmmooosstv");
    });

    test('alphabetizeString("github") should return "bghitu"', () => {
        expect(alphabetizeString("github")).toEqual("bghitu");
    });
});