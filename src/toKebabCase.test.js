import { toKebabCase } from './toKebabCase';

describe('toKebabCase', () => {
    it('should return null on null', () => {
        expect(toKebabCase(null)).toEqual(null);
    });

    it('should do nothing on empty string', () => {
        expect(toKebabCase('')).toEqual('');
    });

    it('should replace spaces with dashes', () => {
        expect(toKebabCase('this is yummy')).toEqual('this-is-yummy');
    });

    it('should clear the input text of unneeded white spaces', () => {
        expect(toKebabCase('  hackathon for fun!!!11  ')).toEqual('hackathon-for-fun!!!11');
    });
})