export const alphabetizeString = string => {
    // return the string argument after being alphabetized and rid of whitespace
    return string
    // split the string into array of characters
    .split('')
    // sorts each character alphabetically using a comparator function
    .sort((a, b) => {
        if(a < b) return -1;
        if(b < a) return 1;
        return 0;
    })
    // filter out any whitespace
    .filter(c => c != ' ')
    // recombine the alphabetized array into a string
    .join('');
};