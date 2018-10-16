export const largestCommonDivisor = (num1,num2) => {
	let low = Math.min(num1,num2);
	let high = Math.max(num1,num2);
	let result = 0;

	for(let i=1;i<=low;i++){ 
		if((low%i==0) && (high%i==0)) {
			if (i > result) {
				result = i;
			}
		}
	}
	return result;
};
