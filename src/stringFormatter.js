import { isString, isNumber } from "util";

export const stringFormatter = (fmt, ...args) => {

  // check format string is valid
  if (!fmt || !isString(fmt)) {
    console.log("bad fmt " + fmt)
    throw "fmt is not a string";
  }

  // check format arguments are valid
  let i;
  for (i = 0; i < args.length; i++) {
    if (isNumber(args[i]) && isNaN(args[i])) {
      throw "argument is not a string or number"
    } else if (args[i] && !(isString(args[i]) || isNumber(args[i]))) {
      throw "argument is not a string or number"
    }
  }

  // perform replacements
  let findRegex = new RegExp('\\{(\\d+)\\}', 'g');
  let match
  while ( (match = findRegex.exec(fmt))!== null ) {
    let i = parseInt(match[1])
    let replaceRegex = new RegExp('\\{' + i + '\\}', 'g');
    if (i < args.length) {
      if (!args[i]) {
        fmt = fmt.replace(replaceRegex, '')
      } else {
        fmt = fmt.replace(replaceRegex, String(args[i]))
      }
    } else {
      fmt = fmt.replace(replaceRegex, '')
    }
  }
  fmt = fmt.trim().replace(/\s\s+/g, ' ')

  return fmt
};
