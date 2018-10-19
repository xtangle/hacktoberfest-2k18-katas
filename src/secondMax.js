export const secondMax = (arr) => {
  if(!Array.isArray(arr) || arr.includes(undefined) || arr.includes(null)) return null;

  if(arr.length < 2) return null;

  var highest = 0;
  var second_highest = 0;

  for(const item of arr) {
    if(item > highest) {
      second_highest = highest;
      highest = item;
    }

    if(item > second_highest && item < highest) {
      second_highest = item;
    }
  }

  return second_highest;
};
