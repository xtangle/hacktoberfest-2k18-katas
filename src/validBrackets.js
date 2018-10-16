export const validBrackets = (expr) => {

    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let queue = [];

    for (let c of expr) {
        if (Object.keys(map).includes(c)) {
            // if it's an opening bracket, add it in the queue
            queue.push(map[c]);
        } else if (Object.values(map).includes(c)) {
            if (queue.length === 0 || c !== queue.pop()) {
                // if it's a closing bracket but the queue is empty
                // or if it doesn't close the last bracket we opened
                // the expression is invalid
                return 'INVALID';
            }
        }
    }

    // if no brackets are pending, the expression is valid
    if (queue.length === 0) return 'VALID';

    return 'INVALID';

};
