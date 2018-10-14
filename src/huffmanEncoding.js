function resolveHuffman(dictionary, source, length = 1) {
    if (length > source.length) {
        return ""
    }

    const currentInput = source.slice(0, length)

    return currentInput in dictionary ?
        dictionary[currentInput] + resolveHuffman(dictionary, source.slice(length)) :
        resolveHuffman(dictionary, source, length + 1)
}

export const huffmanEncoding = (input) => {
    const parts = input.split('\n')
    const dictionaryLength = parseInt(parts[0])
    const action = parts[dictionaryLength + 1]
    let source = parts[dictionaryLength + 2]
    let dictionary = parts.slice(1, dictionaryLength + 1)
    let result = ""

    dictionary = dictionary.reduce((acc, pair) => {
        let splitPairs = pair.split(" ")

        if (action == 'DECODE') {
            acc[splitPairs[1]] = splitPairs[0]
        }
        if (action == 'ENCODE') {
            acc[splitPairs[0]] = splitPairs[1]
        }

        return acc
    }, {})

    result = resolveHuffman(dictionary, source)

    return result
};
