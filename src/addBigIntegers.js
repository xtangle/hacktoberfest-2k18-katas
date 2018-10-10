const reverseString = (str) => {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

export const addBigIntegers = (intString) => {
  const numbers = intString.split('\n').splice(1);
  let sum = '';
  let topNum = numbers.slice(0, 1)[0];
  let bottomNum;
  numbers.splice(1).forEach((curNum) => {
    if (curNum.length > topNum.length) {
      topNum = curNum;
      bottomNum = topNum;
    } else {
      topNum = topNum;
      bottomNum = curNum;
    }

    topNum = reverseString(topNum);
    bottomNum = reverseString(bottomNum);

    let carry = 0;
    let localSum = '';
    for (let i = 0; i < topNum.length; i++) {
      const topDigit = parseInt(topNum[i]);
      const bottomDigit = bottomNum[i] ? parseInt(bottomNum[i]) : 0;
      let digitSum = (carry) + topDigit + bottomDigit;

      if (digitSum >= 10) {
        carry = 1;
        digitSum -= 10;
      } else {
        carry = 0;
      }
      localSum = digitSum.toString() + localSum;
    }
    localSum = carry !== 0 ? carry.toString() + localSum : localSum;
    sum = localSum;
    topNum = sum.toString();
  });

  return sum;
};
