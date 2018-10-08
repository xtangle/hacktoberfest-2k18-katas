export const octalToDecimal = (octalNum) => {
  if(!isNaN(octalNum) && typeof octalNum === 'string') {
    let splitted = octalNum.split('.');
    let integer = parseInt(splitted[0], 8);
    if(splitted.length == 2) {
      let fractionalElements = splitted[1].split('');
      let powVal = -1;
      let fractSum = 0;
      fractionalElements.forEach(element => {
        fractSum += parseInt(element)*Math.pow(8, powVal);
        powVal--;
      });
      return integer + fractSum;
    } else {
      return integer;
    }
  } else {
    throw "Input is invalid";
  }
};