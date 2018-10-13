function getPaths(obj) {
    const acc = [];
    Object.entries(obj).map(([key, value]) => {
        if (value === null || typeof value !== 'object') {
            acc.push(key);
        } else {
            const subPaths = getPaths(value);
            subPaths.map(p => key + '.' + p).forEach(p => acc.push(p));
        }
    });
    return acc;
}

export const getKeyPaths = (obj) => {
    if (Array.isArray(obj) || typeof obj !== 'object') throw 'Invalid input';
    return getPaths(obj);
};
