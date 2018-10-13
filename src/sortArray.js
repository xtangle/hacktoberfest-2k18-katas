export const sortArray = input => {
  //exception throwing
  for(var i = 0; i < input.array.length ; i++){
    if(input.array[i] !== parseInt(input.array[i], 10)){
      // data is not an integer - throw exception
      throw "Invalid input '"+String(input.array[i])+"' at index "+String(i)
    }
  }
  //sorting algorithm
  if(input.ascending){
    input.array = input.array.sort((a, b) => a - b)
  }else{
    input.array = input.array.sort((a, b) => b - a)
  }
};
