export const isPrefix = (prefix, sentence) => {

	//prefix cannot be shorter than the sentence we are checking 
	if(sentence.length < prefix.length)	return false;

    var i = 0;
    while(prefix.charAt(i) == sentence.charAt(i) && i <= prefix.length)
        i++;
	//prefix is smaller than sentence
	if(i < prefix.length)	return false;
    return true;
};
