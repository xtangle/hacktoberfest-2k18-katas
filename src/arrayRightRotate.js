export const arrayRightRotate = (arr, n) => {
    if(arr.constructor !== Array)
        return null;
    let len = arr.length;
    n %= len;
    for(let i=0; i<n; i++){
        let n = arr.pop();
        arr.unshift(n);
    }
    return arr;
};
