export const contains = (arr, num) => {
  for (var i=0; i < arr.length; i++){
    if (arr[i] == num){
      return true;
    }
  }
  return false;
};