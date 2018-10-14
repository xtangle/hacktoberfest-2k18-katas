export const isNumber = (num) => {
	//\d+ matches one or more any digit
	//-? matches zero or one negative sign
	//(\.\d)? matches a decimal followed by any number of digits 
	return /^-?\d+(\.\d+)?$/.test(num);
};
