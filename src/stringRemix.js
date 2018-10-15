export const stringRemix = (input, remixOrder) => {
    if (typeof input != 'string' ||
        !Array.isArray(remixOrder) ) {
        return null
    }

    return remixOrder.reduce((output, position) => {
        return output + input.slice(position, position + 1)
    }, '')
};
