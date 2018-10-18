export const twoSum = (arr, sum) => {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++)
    {
      for (var j = i + 1; j < arr.length; j++)
      {
        if (arr[i] + arr[j] === sum)
        {
          return [i,j]
        }
      }
    }
    throw new Error ('no match')
  }
  else {
    throw new Error ('not a correct input')
  }
};
