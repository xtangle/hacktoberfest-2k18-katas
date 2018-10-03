import { isCorrectBracketSequence } from './isCorrectBracketSequence';

describe('isCorrectBracketSequence', () => {
    it('return true when a string has CBS (0)', () => {
        isCorrectBracketSequence('()(())').toBeTruthy();
    });
    it('return true when a string has CBS (1)', () => {
        isCorrectBracketSequence('Hello (World)').toBeTruthy();
    });
    it('return true when a string has CBS (2)', () => {
        isCorrectBracketSequence('2 + (117 * (345/52)) + [data.value]/{something {master: {Bool: true, Array: [array]} }}').toBeTruthy();
    });
    it('return false when a string has CBS (0)', () => {
        isCorrectBracketSequence('[]]').toBeFalsy();
    });
    it('return false when a string has CBS (1)', () => {
        isCorrectBracketSequence('[Hello](0))(])]{World}}').toBeFalsy();
    });
})