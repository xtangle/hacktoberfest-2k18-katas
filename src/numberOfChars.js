export const numberOfChars = (input) => {
	
	var numOfChars = input.length;
	if(numOfChars == 11)
	{
		return numOfChars;
	}
	else if (numOfChars == 32)
	{
		return numOfChars;
		
	}
	else
	{
		throw numberOfChars('-');
	}
	
}