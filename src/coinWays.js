export const coinWays = (target, length, coins) => {
  if(target == 0 || length == 0)
    return 0;
  var count = 0;
  coins.sort().filter((coin) => (coin <= target)).forEach((coin) => {
    if(coin == target)
    count ++;
    else {
      var others = coins.filter((c) => (c >= coin));
      count += coinWays(target - coin, others.length, others);
    }
  })
  return count;
};
