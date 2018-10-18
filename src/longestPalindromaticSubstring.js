export const longestPalindromaticSubstring = (str) => {
	if (typeof str !== 'string' || str === '')
		throw 'type or value not permitted'
	var arr = str.split("");
	var endArr = [];
	for(var i = 0; i < arr.length; i++) {
		var temp = "";
    	temp = arr[i];
    	for(var j = i + 1; j < arr.length; j++) {
      		temp += arr[j];
      		if(temp.length > 1 && temp.toUpperCase() === temp.split("").reverse().join("").toUpperCase()) {
        		endArr.push(temp);
      		}
    	}
  	}
	var count = 0;
	var longestPalindrome = "";
	for(var i = 0; i < endArr.length; i++){
		if(count < endArr[i].length) {
			longestPalindrome = endArr[i]; 
			count = endArr[i].length;
    	}
  	}
  	return longestPalindrome;
};