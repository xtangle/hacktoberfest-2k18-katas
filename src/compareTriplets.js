export const compareTriplets = (a, b) => {
	if (!Array.isArray(a) || !Array.isArray(b)) {
		return false;
	}

	if (a.length !== b.length) {
		return false;
	}

	const answer = [0, 0]

	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			answer[0]++;
		}

		if (a[i] < b[i]) {
			answer[1]++;
		}
	}

	return answer;
};
