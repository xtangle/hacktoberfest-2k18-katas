export const foldArray = (array, foldingFactor) => {
    
    if(array.length == 0 || (!foldingFactor && typeof(foldingFactor) != "number"))
        return array
    
    if(!Array.isArray(array))
        throw "The first parameter must be an array"
    
    if(!Number.isInteger(foldingFactor))
        throw "The folding factor must be an interger."    
 
    array.forEach(element => {
        if(!Number.isInteger(element))
            throw "The array's elements must be numbers."        
    });
    
    var foldedArray = [];
    var fPoint = (array.length-1)/2; 
    
    for(var i=0; i< fPoint; i++){
        var b = array.length -1 - i;
        foldedArray.push(array[i] + array[b]); 
    }

    if(array[fPoint])
    foldedArray.push(array[fPoint]);

    foldingFactor--;
    
    if(foldingFactor > 0)
        return foldArray(foldedArray, foldingFactor);

    return foldedArray;
};