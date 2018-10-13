export const sortArray = input => {
  var array
  var ascending
  if(Array.isArray(input)){
    array = input
    ascending = false
  }else{
    array = input.array
    ascending = input.ascending
  }
  //exception throwing
  for(var i = 0; i < array.length ; i++){
    if(typeof array[i] === 'string' || array[i] instanceof String){
      // data is not an integer - throw exception
      var err_message =  "Invalid input '"+array[i]+"' at index "+String(i)
      throw err_message
    }
  }
  //sorting algorithm
  if(ascending){
    array = array.sort((a, b) => a - b)
  }else{
    array = array.sort((a, b) => b - a)
  }
  return array
};
