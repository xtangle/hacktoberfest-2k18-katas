export const leftPad = (str, len, ch) => {

  if(!ch && ch !== 0) ch = ' '; /* Check if the argument of ch is valid */

  str = String(str);

  while(str.length < len)
    str = ch + str; /* Add ch in front of main string */

  return str;

};
