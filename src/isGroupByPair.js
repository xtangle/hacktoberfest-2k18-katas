export const isGroupByPair = (groupOfPairs) => {
  if (groupOfPairs.length <= 1) {
    return false;
  }
  var pairMatches = [];
  for (var i=0; i<groupOfPairs.length; i++) {
    if (groupOfPairs[i] == ')' && pairMatches[0] == '(' ||
        groupOfPairs[i] == '}' && pairMatches[0] == '{' ||
        groupOfPairs[i] == ']' && pairMatches[0] == '[') { 
          pairMatches.shift(); 
    } else {
      pairMatches.unshift(groupOfPairs[i]);
    }
  }
  return pairMatches.length == 0;
};