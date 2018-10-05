export const range = (arr) => {
    // TO IMPLEMENT IN ANOTHER PR

    // The range of a array of numbers is the difference between the smallest and largest values.
    // Ex. the range of [3, 7, 4, 2, 6] is [2, 7].

    if(!(arr instanceof Array) || !arr.length) {
        return null;
    }

    let min = arr.reduce((min, current) => Math.min(min, current))
    let max = arr.reduce((max, current) => Math.max(max, current))

    return [min, max];
};