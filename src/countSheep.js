export const countSheep = arr => {
  //Given an array as an argument
  //Should return the number of instances of the workd 'sheep'
  //Should return 0 if the sirst argument is not an array

  if(!(arr instanceof Array)) {
    return 0;
  }

  return arr.reduce(function(sheepCount, currentWord) {
    if(currentWord === 'sheep') {
      sheepCount += 1
    }

    return sheepCount;
  }, 0)
};
