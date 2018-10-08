export const rotateRight = (arr, num) => {
    if((num % arr.length) === 0) return arr;
    var ret = [];
    var j = num % arr.length;
    for(var i = 0; i < arr.length; i++) {
        ret[(i + j) % arr.length] = arr[i];
    }
    return ret;
}