export const removeMultipleSpecialCharacters = (sentence) => {
	
  // replacing all special characters with whitespace
  var newSentence = sentence.replace(/[^a-zA-Z]/g, ' ');
  
  // replacing multiple whitespaces with just one, before trimming the front and end whitespaces
  newSentence = newSentence.replace(/\s+/g,' ').trim();
  
  // split sentence to count number of words
  var result = newSentence.split(' ').length;
  
  return result;
};
