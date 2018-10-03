const isString = x => typeof x === 'string'

export const replaceChars = (str, toBeReplaced, replacer) => 
   isString(str)
	? str.split('').map(x => x === toBeReplaced ? replacer : x).join('')
	: null
