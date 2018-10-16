export const arrayCubeRootToJson = (arr) => {
  let cubeRootObj = {};
  if (Array.isArray(arr) && arr.every(value => !isNaN(parseInt(value)) && typeof parseInt(value) === 'number' || value == Infinity)) {
    for (let value of arr) {
      cubeRootObj[value] = Math.cbrt(value);
    }
    return cubeRootObj;
  } else {
    throw new Error(`Errored at: ${arr}`);
  }
};
