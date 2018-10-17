export const isSymmetrical = (num) => {
	if (num === null) return false;
	if (Number(num.toString().split("").reverse().join(""))===num) return true;
	return false;
};
