export const integerToRoman = (num) => {
	var answer = '';
  //array for both roman and decimal value
  //4,9,40 special cases 
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var decimal_length = decimal.length;

  for (var i = 0; i <= decimal_length; i++) {
  // when we find a num less than our num, subtract it from our num and repeat process
    while (num % decimal[i] < num) {   
      answer += roman[i];
      //if we found a matching, a roman numerial will be added to our answer
      num -= decimal[i];
    }
  }
  return answer;
};