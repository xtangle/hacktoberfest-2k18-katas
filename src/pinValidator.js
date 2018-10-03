export const pinValidator = (arr) => {

  let count = 0;

  if(arr == undefined || arr == null || arr.length <= 0)
    return null;
  
  if(arr.length > 4)
    return false;
  
  let a = arr.filter((val, index, arr) => {
    if(!Number.isNaN(val) && Number.isInteger(val)){
      count++;   
    }
  });

  if(count == 4 && arr.length == 4)
    return true;
  
  return false;
};