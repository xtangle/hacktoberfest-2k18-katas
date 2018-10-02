export const countOdd = values => {
  
  if(!values){
    return 0;
  }
  else if(!values.length){
    return 0;
  }
  else{
    var l=values.length;
    var i;
    var count=0;
    for(i=0;i<l;i++)
    {
      if(values[i]%2!=0)
      {
        count=count+1;
      }
    }
    return count;
  }
};