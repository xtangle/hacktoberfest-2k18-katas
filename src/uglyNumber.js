export const uglyNumber = (n) => {
  if(isNaN(n)){
    throw `${n} is NOT a number`;
  }
  let i = 1;  
  let count = 1;   
  while (n > count) 
  { 
    i++;       
    if (isUgly(i)) 
      count++;  
  } 
  return i; 
}

const isUgly = (no) => {
  // TO IMPLEMENT IN ANOTHER PR
  no = maxDivide(no, 2); 
  no = maxDivide(no, 3); 
  no = maxDivide(no, 5); 
    
  return (no == 1)? true : false; 
};


const maxDivide = (a,  b) =>  { 
    while(a % b == 0) 
    a = a/b; 
    return a; 
}
      


