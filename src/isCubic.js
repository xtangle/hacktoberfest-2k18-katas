export const isCubic = (num) => {
  let type = typeof num;
  if(type !== 'number' &&  type !== 'string') {
    return null;
  }
  let cbrt = Math.cbrt(Number(num));
  if(Number.isInteger(cbrt)) {
    return true;
  }
  return false;
};