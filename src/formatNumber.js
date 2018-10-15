export const formatNumber = (input) => {
    if (isNaN(input) || input === null) {
        return null;
    }

    input = input.toString(10)

    let output = '';

    if (input.length > 3) {
        let counter = 0;
        for (let i = input.length - 1; i >= 0; i--) {
            output += input[i];
            counter++;

            if (i > 0 && counter % 3 === 0) {
                output += ',';
            }
        }

        output = output.split('').reverse().join('');
    } else {
        output = input.toString(10);
    }

    return output;
};
