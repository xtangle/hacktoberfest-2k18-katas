export const lcm = (x,y) => {
	//lcm (x,y) = (x*y)/gcd(x,y)
	function gcd (x, y){
		if (y == 0) 
			return x;
		return gcd(y, x%y);
	}
	if (x == 0 || y == 0)
		return null;
	return (x*y)/gcd(x,y);
};	