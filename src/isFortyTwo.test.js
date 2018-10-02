import { isFortyTwo } from './isFortyTwo';

describe('isFortyTwo', () => {
    it('returns true when a number is 42', () => {
        expect(isFortyTwo(42)).toBeTruthy();
    });

    it('returns true when a string is 42', () => {
        expect(isFortyTwo("42")).toBeTruthy();
    });

    it('returns true when a string is forty-two', () => {
        expect(isFortyTwo("Forty-two")).toBeTruthy();
    });

    it('returns true when a string is forty-two', () => {
        expect(isFortyTwo("FoRtY-TwO")).toBeTruthy();
    });

    it('returns true when a string is forty-two', () => {
        expect(isFortyTwo("FORTY-TWO")).toBeTruthy();
    });

    it('returns false when a string is forty-two but written with bad grammar', () => {
        expect(isFortyTwo("Fortytwo")).toBeFalsy();
    });

    it('returns false when a string is something else', () => {
        expect(isFortyTwo("Hacktoberfest")).toBeFalsy();
    });

    it('returns false when a number is not 42', () => {
        expect(isFortyTwo(69)).toBeFalsy();
    });

    it('returns false when a string is -42', () => {
        expect(isFortyTwo("-42")).toBeFalsy();
    });
});