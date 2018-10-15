export const isMatch = (a, b) => {
	if (a.constructor != Object || b.constructor != Object) {
		return false;
	}

	let aProps = Object.getOwnPropertyNames(a);

	//if any values of same property are equal return true
	for (let element of aProps) {
		if (a[element] === b[element]) {
			return true;
		}
	}

	return false;
};