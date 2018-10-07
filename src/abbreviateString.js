export const abbreviateString = (str) => {
	if (typeof str !== 'string')
		throw 'type not permitted'
	
	let strArray = str.split(' ')
	let lenArray = strArray.length
	
	if (lenArray >= 2)
		return strArray[0] + ' ' + strArray[lenArray-1][0].toUpperCase() + '.'
	else
		return strArray[0]
};
