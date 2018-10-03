export const merge = (...input) => {
  if(input.length === 0){
    return null;
  }

  if(input.length === 1){
    return input[0];
  }

  if(input.length === 2){
    let object1 = input[0];
    let extended = input[1];
    for(let prop in input[0]){
        if(object1.hasOwnProperty(prop) && extended.hasOwnProperty(prop)){
            extended[prop] = [object1[prop], extended[prop]];
        }
        else if(object1.hasOwnProperty(prop)){
            extended[prop] = object1[prop];
        }
    }
    return extended;
  }
};