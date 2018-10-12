export const swapKeysAndValues = ( object ) => {
    const swappedObject = {};
    for ( const key in object ) {
        swappedObject[ object[ key ]] = Number.parseInt( key, 10 ) || key;
    }
    return swappedObject;
};
