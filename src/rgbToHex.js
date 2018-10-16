export const rgbToHex = (rgbArr) => {
  if ((rgbArr === undefined)
  || (rgbArr.length === 0)
  || (rgbArr.includes(null, false) || rgbArr.includes(false, null))
  || (typeof(rgbArr[0]) === 'string' || typeof(rgbArr[1]) === 'string' || typeof(rgbArr[2]) === 'string'))
  {
    throw 'Not possible. Please, use only numeric values.'
  }
  
  let hexPre = hexCalculator(rgbArr[0]);
  let hexInf = hexCalculator(rgbArr[1]);
  let hexSuf = hexCalculator(rgbArr[2]);

  let hexAll = hexPre + hexInf + hexSuf;
  hexAll = minify(hexAll);
  return '#' + hexAll;  
};

const hexCalculator = (rgbValue) => {
  let hex = Number(rgbValue).toString(16);
  if (hex.length < 2) {
       hex = '0' + hex;
  }
  return hex;
}

const minify = (hexValue) => {
  if(hexValue[0] === hexValue[1]
  && hexValue[2] === hexValue[3]
  && hexValue[4] === hexValue[5])
  {
    return hexValue[0] + hexValue[2] + hexValue[4];
  }
  else return hexValue;
}