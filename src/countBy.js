export const countBy = array => {
    if (!Array.isArray(array)) throw 'Parameter needs to be an array';

    const output = {};
    for(let value of array) {
        if (output.hasOwnProperty(value)) output[value]++;
        else output[value] = 1;
    }

    return output;
};
