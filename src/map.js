export const map = (arr, callback) => {
  console.log(typeof arr, typeof callback, arr.length)
  if (typeof arr != 'object' || arr == undefined || arr.length == undefined || arr.length < 0 || typeof callback != 'function') throw new Error('Something bad');
  let resultArr = [];
  arr.forEach(el => {
    resultArr.push(callback(el));
  });
  return (resultArr);
};