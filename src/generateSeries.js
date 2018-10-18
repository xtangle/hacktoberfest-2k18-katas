export const generateSeries = (startValue, length, generationFunction) => {
    if (!Number.isInteger(startValue) || !Number.isInteger(length)) {
        throw "Start value and length must be numbers";
    }
    if (length < 0) {
        throw "Length must be grater than or equal to zero";
    }

    let arr = [];
    let acc = startValue;
    for (let i = 0; i < length; i++) {
        arr.push(acc);
        acc = generationFunction(acc);
    }

    return arr;
};
