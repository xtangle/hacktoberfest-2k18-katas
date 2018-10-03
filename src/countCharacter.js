export const countCharacter = (str, char) => {
  if (str && char) {
    var reg = new RegExp(`[${char}]`, "g")
    return str.match(reg) ? str.match(reg).length : 0
  }
  
  return null
};