export const reverseBits = (n) => {
  let x = n.toString(2);
  if (x.length % 2 !== 0) x = x + 0;
  let ans = [];
  if (x.charAt(0) === '1' && x.charAt(x.length - 1) === '1') {
    ans.push(1);
    for (let i = 1; i < x.length - 1; i++) {
      ans.push(+!parseInt(x[i]));
    }
    ans.push(1);
  } else {
    for (let i of x) {
      ans.push(+!parseInt(i));
    }
  }
  return parseInt(ans.join(""), 2)
};
