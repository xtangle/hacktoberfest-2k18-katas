export const medianOfTwoSortedArrays = (arr1, arr2) => {
  // TO IMPLEMENT IN ANOTHER PR
  let totalLength = arr1.length + arr2.length;
  let midpoint = Math.floor(totalLength / 2);
  let arr = [];

  while (arr.length !== midpoint + 1) {

  	if (!arr2.length || arr1[0] <= arr2[0]) {
  		arr.push(arr1.shift());
  	} else if (!arr1.length || arr2[0] < arr1[0]) {
  		arr.push(arr2.shift());
  	}
  }

  if (totalLength % 2 !== 0) {
  	return arr[arr.length - 1];
  } else {
  	return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
  }
};