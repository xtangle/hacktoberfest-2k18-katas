export const stringInterpolation = (input, values) => {
    if (typeof input !== 'string') return input;
    if (!values.length) values = [];

    return input.replace(/\{(\d+)\}/g, (match, number) => number <= values.length ? values[number - 1] : match);
};
