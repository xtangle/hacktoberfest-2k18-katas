export const arrayDifference = (a,b) => {
  return a.filter(function(i) {return b.indexOf(i) < 0;}); 
};
