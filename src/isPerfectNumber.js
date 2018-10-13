export const isPerfectNumber = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
		return false;
	};

	let final = 0;

	for (let i = 1; i < number; i++) {
		if (number % i == 0) {
			final += i;
		};
	};

	return final == number ? true : false;
};
