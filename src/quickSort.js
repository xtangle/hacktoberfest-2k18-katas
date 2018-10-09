export const quickSort = (array) => {
  if(array.length < 2) {
    return array;
  }
  // Pick random pivot to avoid looping
  var pivot = array[Math.floor(Math.random() * array.length)];
  var low = array.filter((x) => (x <= pivot));
  var high = array.filter((x) => (x > pivot));
  return quickSort(low).concat(quickSort(high))
};
