export const partition = (array, predicate) => {
  var arr1 = [], arr2 = [];
  for(var i = 0; i < array.length; i++) {
    if(predicate(array[i]))
      arr1.push(array[i]);
    else 
      arr2.push(array[i]);
  }
  return [arr1, arr2];
};