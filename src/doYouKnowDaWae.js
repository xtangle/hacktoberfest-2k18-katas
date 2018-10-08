export const doYouKnowDaWae = (arr, colw) => {
	const longestBinaryLength = Math.max(arr).toString(2).length
	if(arr[arr.length - 1] % 2 === 0)
		return false
	const binaries = arr
		.map(number => number.toString(2))
		.map(binary => binary.padStart(longestBinaryLength, 0))
		.map(binary => binary.split('').map(digit => parseInt(digit)))
	move(0, 0, binaries)
	
	return binaries[arr.length - 1][longestBinaryLength - 1] === 0
};

const move = (numberIndex, digitIndex, array) => {
	if(array[numberIndex][digitIndex] === 1) {
		array[numberIndex][digitIndex] = 0
		getPossibleMoves(numberIndex, digitIndex, array)
			.forEach(coords => move(coords.numberIndex, coords.digitIndex, array))
	}
}

const getPossibleMoves = (numberIndex, digitIndex, array) => {
	return [
		{numberIndex: numberIndex - 1, digitIndex},
		{numberIndex: numberIndex + 1, digitIndex},
		{numberIndex, digitIndex: digitIndex - 1},
		{numberIndex, digitIndex: digitIndex + 1}
	].filter(coords => array[coords.numberIndex] && array[coords.numberIndex][coords.digitIndex] === 1)
}



