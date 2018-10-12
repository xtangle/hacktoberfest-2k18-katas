//a function which repeats the given string 'str' exactly 'n' times
export const stringRepeat = (str, n) => {
	if(typeof str !== "string" || typeof n !== "number" || n%1 !== 0 || isNaN(n))
		throw "The parameters are not of the expected type"
	return str.repeat(n)
};
