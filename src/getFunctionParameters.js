export const getFunctionParameters = fn => {
  const defaultArgs = /((\w*) =) .*(arguments.length)/g;
  const es6Defaults = /=[^,]+/g;
  const fnName = /^[^(]*[(]/;
  const multiLineComments = /[/][*][^/*]*[*][/]/g;
  const singleLineComments = /[/][/].*$/mg;
  const whiteSpaces = /\s+/g;
  const fnStr = (fn || '').toString();

  return [... new Set(fnStr
    .replace(singleLineComments, '')
    .replace(whiteSpaces, '')
    .replace(multiLineComments, '')
    .split(')', 1)[0]
    .replace(fnName, '')
    .replace(es6Defaults, '')
    .split(',')
    .filter(p => p && p.indexOf('...') === -1)
    .concat(
      (fnStr.match(defaultArgs) || [])
      .map(item => item.split(' ')[0].trim())
    ))];
};
