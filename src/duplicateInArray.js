export const duplicateInArray = (array) => {
  if (array.length < 1) {
    return null
  }

  let duplicates = array.reduce((acc, el, i, arr) => {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
  }, []);



  return duplicates;
};
