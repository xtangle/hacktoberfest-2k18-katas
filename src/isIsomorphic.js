export const isIsomorphic = (string1, string2) => {
  
  if(typeof(string1) != 'string' || typeof(string2) != 'string' || string1.length == 0 || string2.length == 0)
    return null;

  else if(string1.length != string2.length ){
    return false;
  }

  else{
    var mappedCharacter = {};
    var string2CharacterIsVisited = {};

    for(var index=0; index < string1.length; index++){

      if(mappedCharacter[string1[index]] == undefined){

        if(string2CharacterIsVisited[string2[index]] == true){
          return false;
        }

        else{
          mappedCharacter[string1[index]] = string2[index];
          string2CharacterIsVisited[string2[index]] = true;
        }
      }

      else{
        if(mappedCharacter[string1[index]] != string2[index]){
          return false;
        }

      }
    }
  }
  return true;
};
