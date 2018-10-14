export const upperBound = (input, limit) => {
    const foundIndex = input.findIndex((element) => {
        return element > limit
    })
    return foundIndex >= 0 ? foundIndex : input.length
};
