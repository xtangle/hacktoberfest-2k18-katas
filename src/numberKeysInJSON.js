function isObject(obj) {
  return typeof obj === "object" && Object.keys(obj).length;
}

function countKeys(obj) {
  if (isObject(obj)) {
    return (
      Object.keys(obj).reduce((acum, key) => acum + countKeys(obj[key]), 0) + 1
    );
  } else {
    return 1;
  }
}

export const numberKeysInJSON = obj => {
  if (isObject(obj)) {
    return countKeys(obj) - 1;
  } else {
    throw -1; // new Exception(); error in linter
  }
};
