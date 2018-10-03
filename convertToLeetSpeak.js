export const convertToLeetSpeak = (toConvert) => {
    let response = '';
    const match = {
        'a': '4',
        'b': 'b',
        'c': 'c',
        'd': 'd',
        'e': '3',
        'f': 'f',
        'g': '9',
        'h': 'h',
        'i': '1',
        'j': 'j',
        'k': 'k',
        'l': 'l',
        'm': 'm',
        'n': 'n',
        'o': '0',
        'p': 'p',
        'q': 'q',
        'r': 'r',
        's': '5',
        't': '7',
        'u': 'u',
        'v': 'v',
        'w': 'w',
        'x': 'x',
        'y': 'y',
        'z': '2',
        ' ': ' '
    };

    for (let i = 0; i < toConvert.length; i++)
        response += match[toConvert[i]];
    return (response);
};
