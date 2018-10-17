export const isObjectEqual = (a, b) => {
	if (a === b)
		return true;

	if (a.constructor !== b.constructor)
		return false;
	
	for (var p in a) {
		if (!a.hasOwnProperty(p))
			continue;
  
		if (!b.hasOwnProperty(p))
			return false;
		
		if (a[p] === b[p])
			continue;
		
		if (typeof(a[p]) !== "object")
			return false;

		if (!isObjectEqual(a[p], b[p]))
			return false;
	}

	return true;
};
