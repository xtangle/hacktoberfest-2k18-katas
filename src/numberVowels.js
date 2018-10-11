export const numberVowels = str => {
  //check inputs for Null, Undefined, Numbers, and Blanks
  if (str == null || !isNaN(str)) {
    return null;
  } else {
    //split str into each word
    const words = str.split(" ");

    //map number of vowels
    const vowelCounts = words.map(word => {
      const vowels = word.match(/[aeiou]/gi);
      return vowels ? vowels.length : 0;
    });

    //check for max Number of Vowels
    const maxNumVowels = Math.max(...vowelCounts);

    //check if any vowels exist before proceeding else return null
    if (maxNumVowels > 0) {
      const maxVowelWords = [];
      const maxObj = { number: maxNumVowels };

      //loop over vowelCounts array to ensure no duplicate maxes exist
      for (var i = 0; i < vowelCounts.length; i++) {
        if (vowelCounts[i] === maxNumVowels) {
          maxVowelWords.push(words[i].replace(/[^\w\s]/gi, "")); //replace all non alpha characters with '' and push to array
        }
      }
      if (maxVowelWords.length > 1) {
        maxObj.most = maxVowelWords;
      } else {
        maxObj.most = maxVowelWords[0];
      }

      return maxObj;
    } else {
      return null;
    }
  }
};
