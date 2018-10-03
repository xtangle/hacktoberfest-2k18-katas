export const encodeToCaesar = (encodeStr, encodeLength) => {  
  var encodedResult = '';  
  for(let i=0; i < encodeStr.length;i++){
    if(encodeStr[i] != ' '){
      encodedResult += String.fromCharCode(encodeStr.charCodeAt(i)+encodeLength);    
    }else {
      encodedResult += ' ';
    }        
  }
  return encodedResult;
};
