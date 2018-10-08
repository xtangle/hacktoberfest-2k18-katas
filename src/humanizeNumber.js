export const humanizeNumber = (num) => {
    if(typeof(num) != 'number' && typeof(num) != 'string')
        throw "Invalid Parameter";
    num = ""+num;
    switch (num[num.length-1]) {
        case '1':
            return num+'st';
        case '2':
            return num+'nd';
        case '3':
            return num+'rd';
        default:
            return num+'th';

    }
};
