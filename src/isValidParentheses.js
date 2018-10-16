export const isValidParentheses = (s) => {
  var tokens = [];
  if(s == '') return false;
  for (let token of s.split('')) {
    switch(token) {
      case '(':
        tokens.push(')');
        break;
      case '[':
        tokens.push(']');
        break;
      case '{':
        tokens.push('}');
        break;
      default:
        if(tokens.pop() != token) {
          return false;
        }
    }
  }
  return true;
};
