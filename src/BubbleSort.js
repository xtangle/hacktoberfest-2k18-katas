export const BubbleSort = numbers => {
  const sortedArray = JSON.parse(JSON.stringify(numbers));
  let work = true;
  while (work) {
    let swapped = false;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      work = false;
    }
  }
  console.log(sortedArray);
  return sortedArray;
};
