export const shortestWord = (str) => {
	var reg = new RegExp(`[a-z]`);
	if (typeof str != 'string' || !str.match(reg)) return null;
	var words = str.split(' ');
	return words.reduce((shortest, current) => {
		return current.length < shortest.length && current.match(reg) ? current : shortest;
	}, words[0]);
};
