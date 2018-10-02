export const firstCharacterInString = (string) => {
    return string.toString().split(/\s/).map(word => word.charAt(0))
};