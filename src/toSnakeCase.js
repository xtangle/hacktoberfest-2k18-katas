export const toSnakeCase = (str) => {
  if(typeof(str) !== 'string') throw 'Not a string';
  var ret = '';
  for(var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if(i == 0 && c > 64 && c < 91) {
      ret += String.fromCharCode(c + 32);
      continue;
    }
    if(c == 32 || c == 45) {
      ret += '_';
    } else if(c > 64 && c < 91) {
      ret += '_' + String.fromCharCode(c + 32);
    } else {
      ret += String.fromCharCode(c);
    }
  }
  return ret;
};