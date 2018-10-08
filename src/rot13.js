export const rot13 = (input) => {
    input = ""+input;
    if(input.length == 0)
        return '';
    let alphamap = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm'
    }
    let res = "";
    for(let i=0; i<input.length; i++)
        res += alphamap[input[i]];
    return res;
};
