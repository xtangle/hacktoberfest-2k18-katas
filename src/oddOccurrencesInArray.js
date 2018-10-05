/*
  A non-empty array A consisting of integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired. Write a function that, returns the value of the unpaired element.
  F.e.: A = [1,2,3,2,1], result will be = 3
  */
export const oddOccurrencesInArray = arr => {  
  let p = new Map()  //pairs
  
  for (let e of arr) {
    if (p.has(e)) p.delete(e)
    else p.set(e)
  }

  return p.keys().next().value
}