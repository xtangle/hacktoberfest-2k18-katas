export const isPowerOfFive = (n) => {
  if (n <= 1) return true
  let isLower = true
  let res = 1
  for (let i = 2; isLower; i++) {
    res = i ** 5
    if (res === n) return true
    isLower = res < n
  }
  return false
}
