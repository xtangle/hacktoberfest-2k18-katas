export const isHarshad = (num) => {
	var sum = 0;
	var str = new String(num);
	for (var i=0; i<str.length; i++)
		sum += parseInt(str.charAt(i));	

	// sum of digits must be divisibly by the number
	if(num % sum == 0)	
		return true;
	else
		return false;
};
