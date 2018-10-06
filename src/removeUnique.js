export const removeUnique = (array) => {
    var bDelete;
    var notDeleted = [];

    for(var i = array.length - 1; i >= 0; --i) {
        bDelete = true;
        for(var k = i - 1; k >= 0; --k) {
            if(array[i] == array[k]) {
                bDelete = false;
                notDeleted.push(array[i]);
                break;
            }  
        }

        if(bDelete && notDeleted.indexOf(array[i]) == -1) {
           array.splice(i, 1); 
        }
    }

    return array; 
};
