export const swapKeysAndValues = ( object ) => {
    const swappedObject = {};
    Object.keys( object ).forEach(( key ) => {
        swappedObject[ object[ key ]] = Number.parseInt( key, 10 ) || key;

    });
    return swappedObject;
};
