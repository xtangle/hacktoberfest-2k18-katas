export const prefixSum = (a,b) => {
  if(a==[])
  {
    return [];
  }
  else if(b==undefined)
  {
    b=(a,b)=>(a+b);
  }

  for(var i=1;i<a.length;i++)
  {
    a[i] = b(a[i],a[i-1]);
  }
  if(a.length==1)
  {
    return a[0];
  }
  return a;

};
