export const startsWith = (str1, str2) => {
  // TO IMPLEMENT IN ANOTHER PR
  for(var i = 0; i < str2.length; i++) {
    if(str1.charAt(i) !== str2.charAt(i)) return false;
  }
  return true;
};