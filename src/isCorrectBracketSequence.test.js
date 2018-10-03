import { isCorrectBracketSequence } from './isCorrectBracketSequence';

describe('isCorrectBracketSequence', () => {
    it('return true when a string has CBS (0)', () => {
        expect(isCorrectBracketSequence('()(())')).toBeTruthy();
    });
    it('return true when a string has CBS (1)', () => {
        expect(isCorrectBracketSequence('Hello (World)')).toBeTruthy();
    });
    it('return true when a string has CBS (2)', () => {
        expect(isCorrectBracketSequence('2 + (117 * (345/52)) + [data.value]/{something {master: {Bool: true, Array: [array]} }}')).toBeTruthy();
    });
    it('return false when a string has CBS (0)', () => {
        expect(isCorrectBracketSequence('[]]')).toBeFalsy();
    });
    it('return false when a string has CBS (1)', () => {
        expect(isCorrectBracketSequence('[Hello](0))(])]{World}}')).toBeFalsy();
    });
})