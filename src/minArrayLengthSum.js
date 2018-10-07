export const minArrayLengthSum = (arr, num) => {
    if (!Array.isArray(arr)) { throw new Error }

    if (num == undefined) {
      return arr;
    }
    
    if (typeof num !== 'number' || !Number.isInteger(num)) { 
      throw new Error;
    }

    if (arr.length === 0) {
      return [];
    }

    if (sumOfArray(arr) < num) {
      throw new Error;
    }

    if (!arr.every(num => typeof num === 'number' && !Number.isNaN(num))) {
      throw new Error;
    }

    function sumOfArray (arr) {
      return arr.reduce((a, x) => a + x, 0);
    }

    function getCombinations(arr, len) {
      if (len === 1) {
        return arr.map(elem => [elem]);
      }
      let init = len - 1;
      let result = [];
      // debugger;
      for (let i = 0; i <= arr.length - len; i++) {
        let rem = arr.slice(i);
        let subArr = rem.splice(0, init);
        rem.forEach(elem => {
          result.push(subArr.concat(elem));
        })
      }
      return result;
    }

    let result;
    for (let i = 1; i <= arr.length; i++) {
      let combinations = getCombinations(arr, i);
      let filtered = combinations.filter(array => sumOfArray(array) === num);
      if (filtered.length) {
        result = filtered[0].length;
        break;
      } 
    }

    return result;
};