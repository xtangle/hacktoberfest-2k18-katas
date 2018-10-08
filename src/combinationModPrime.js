export const combinationModPrime = (n, k) => {
  // TO IMPLEMENT IN ANOTHER PR
  const MOD = 1000000007

  let orow = [1, 1]
  let ans = 0
  
  for(let i = 2; i <= n; ++i) {
  	let nrow = [...Array(i + 1)].map(_ => 0)
  	for(let j  = 0; j <= i; ++j) {
  		nrow[j] = (j === 0 || j === i ? 1 : orow[j] + orow[j - 1])%MOD
  	}
  	orow = nrow
  }
  return orow[k]
};
