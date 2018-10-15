/* 
Given a string, replace each its character by the next one in the English alphabet(z would be replaced by a).
Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".


RETURN
The result string after replacing all of its characters.
*/

export const alphabeticShift = input => {
    if (typeof input !== 'string' || !input.length) return input;

    const ranges = [
        ['a', 'z'],
        ['A', 'Z'],
    ].map(range => range.map(s => s.charCodeAt(0)));

    let output = '';
    for (let i = 0; i < input.length; i++) {
        let char = input.charCodeAt(i);

        for (let range of ranges) {
            const [lower, upper] = range;
            if (char >= lower && char <= upper) {
                char = lower + (char + 1 - lower) % (upper - lower + 1);
                break;
            }
        }

        output += String.fromCharCode(char);
    }

    return output;
}
