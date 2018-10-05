export const parseNumber = (str) => {
  var sign = 1;
  if (str[0] === '-') {
    sign = -1;
    str = str.replace('-', '');
  }

  var i = str.length;
  var multiplier = 1;

  var result = 0;
  while (--i >= 0) {
    var char = str[i];

    if (char > "9" || char < "0") {
      return NaN;
    }

    var value = multiplier * (char - "0");
    multiplier *= 10;
    result += value;
  }

  return result * sign;
};