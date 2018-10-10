import {parseNumber} from './parseNumber';

export const tokenizer = (str) => {
  str=str.trim();
  let len = str.length;
  let tokens=[];
  let error=[{tokens: "Syntax error", lexeme: "Invalid variable name", literal: null}];
  if(len==0) return tokens;

  //For tracking current cursor position
  let currentIndex=0;
  let variableNameExpected=false;
  while(currentIndex<len)
  {
    let c=str[currentIndex];

    //Check for whitespace and ignore it.
    if (/\s/.test(c)) {
      currentIndex++;
      continue;
    }

    //To extract const name
    if(variableNameExpected===true)
    {
      let val='';
      while(/[a-z]/i.test(c) && currentIndex<len)
      {
        val+=c;
        c=str[++currentIndex];
      }
      //if val length is not whole number it means 
      //there is an error, for now it is only fetching
      //const name containing only characters
      //TODO: For improvement handle const name which
      //include numbers and underscores i.e: n1, c_us
      if(val.length<=0)
      {
        return error;
      }
      //unset flag as we have captured the name of const
      variableNameExpected=false;
      tokens.push({ type: 'identifier', lexeme: val, literal: null });
      continue;
    }
    
    if(c==='+')
    {
      tokens.push({ type: 'plus', lexeme: c, literal: null });
      currentIndex++;
      continue;
    }
    
    if(c==='-')
    {
      tokens.push({ type: 'minus', lexeme: c, literal: null });
      currentIndex++;
      continue;
    }

    
    if(c==='*')
    {
      tokens.push({ type: 'star', lexeme: c, literal: null });
      currentIndex++;
      continue;
    }

    
    if(c==='/')
    {
      tokens.push({ type: 'division', lexeme: c, literal: null });
      currentIndex++;
      continue;
    }

    if(c===';')
    {
      tokens.push({ type: 'semicolon', lexeme: c, literal: null });
      currentIndex++;
      continue;
    }

    if(c==='=')
    {
      tokens.push({ type: 'equal', lexeme: c, literal: null });
      currentIndex++;
      continue;
    }

    //Fetch string
    if(c==='"')
    {
      let nextIndex = str.indexOf('"', currentIndex+1);
      if(nextIndex<0) return error; 
      let val=str.substring(currentIndex, nextIndex+1);
      tokens.push({ type: 'string', lexeme: val, literal: val.split('"').join('')});
      currentIndex=nextIndex+1;
      continue;
    }

    //Fetch number, for now only doing doing integers
    //TODO: As improvement handle doubles
    if(/[0-9]/.test(c))
    {
      let val='';      
      while(/[0-9]/.test(c) && currentIndex<len)
      {
        val+=c;
        c=str[++currentIndex];
      }
      tokens.push({ type: 'number', lexeme: val, literal: parseNumber(val) });
      continue;
    }

    //check if const, set flag variableNameExpected
    //inorder to capture variable name 
    if(c==='c')
    {
      let keyWord=str.substring(currentIndex,currentIndex+6).trim();
      if(keyWord==="const")
      {
        tokens.push({ type: 'const', lexeme: 'const', literal: null });
        currentIndex+=6;
        variableNameExpected=true;
        continue;
      }
    }

    //If reaches this point, there is no valid token
    return error;
  }

  return tokens;
};