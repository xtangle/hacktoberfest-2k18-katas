export const isPalindrome = str => {
  let len = str.length;
  str = str.toLowerCase();
  let res = str.split("");
  let newStr = [], val = false;
  for(let i=0; i<len; i++) {
    newStr[i] = res[len-1-i];
    if(newStr[i] == res[i]) {
      val = true;
    } else {
      val = false;
    }
  }
  return val;
};
