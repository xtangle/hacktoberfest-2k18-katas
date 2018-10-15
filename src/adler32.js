export const adler32 = (s) => {
    let a = 1;
    let b = 0;
    let l = s.length;
    for(let i=0; i < l; i++){
        a += s.charCodeAt(i);
        b += a
        a %= 65521
        b %= 65521
    }
    
    return b * 65536 + a
};
