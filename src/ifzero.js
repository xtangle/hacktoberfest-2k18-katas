export const ifzero = (values) => {  
  var sum = 0;
  var isZero = false;
  if(!Array.isArray(values) || !values.length){
    return isZero;
  }  

  if(Array.isArray(values)){          
    for (var j = 0; j < values.length; j++) {
        if(typeof values[j] == 'undefined'){
            break;
        }            
        sum += values[j];             
    }        
  }

  if(sum == 0){
    isZero = true;
  }  
return isZero;
};