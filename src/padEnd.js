export const padEnd = (str, padLength, padString) => {
  let strWithPad = str;

  if(typeof padLength != "number" || typeof str != "string"){
    return null;
  }

  if(padString === undefined) {
    padString = " ";
  }

  while(strWithPad.length < padLength){
      strWithPad += padString;
  }

  if(strWithPad.length > padLength){
    strWithPad = strWithPad.substr(0,padLength);
  }

  return strWithPad;
};
