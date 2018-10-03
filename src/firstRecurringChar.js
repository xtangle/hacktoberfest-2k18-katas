export const firstRecurringChar = (str) => {
	if (typeof str != 'string') return null;
	var char = "";
	for (var s of str) {
		if (char == s && char != "") {
			return char; 
		} else {
			char = s;
		}
	}
};