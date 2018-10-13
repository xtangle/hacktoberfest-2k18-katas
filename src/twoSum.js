export const twoSum = (arr, sum) => {
  let arrayToReturn = []
  let findThisNumber, index
  for(let i=0;i<(arr.length); ++i) {
    findThisNumber = sum - arr[i];
    index = arr.indexOf(findThisNumber) 
    if (index !== -1) {
      arrayToReturn.push(i, index)
      return arrayToReturn
    }
  }
  return arrayToReturn
};
