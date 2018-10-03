export const longestWord = sentence => {
  if(typeof sentence !== 'string') return null;

  var splitedSentence = sentence.split(' ');
  var longestWord = '';

  for(var i = 0; i < splitedSentence.length; i++){
    var cleanedWord = splitedSentence[i].replace(/\W/g, "").replace(/\d/g, "");

    if(cleanedWord.length > longestWord.length){ 
      longestWord = cleanedWord;
     }
  }

  return longestWord;
};