export const basicOp = (operation, value1, value2) => {

  value1 = Number(value1);
  value2 = Number(value2);

  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "/") {
    if (value2 === 0) {
      return false;
    }
    return value1 / value2;
  }

  return false;
}