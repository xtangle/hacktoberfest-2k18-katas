export const getNextLeapYear = (year) => {
  if(year == null)
    return null
  if(typeof year.getMonth === 'function') {
    var currentYear = year.getFullYear()+1;
    while (true) {
      if(currentYear%4==0) {
        if(currentYear%100!=0) {
          return currentYear;
        }
        else if (currentYear%400==0) {
          return currentYear;
        }
        currentYear++
      } 
    }
  }
     if(!isNaN(parseFloat(n)) && !isNaN(n - 0)) {
        var currentYear=year+1;
        while (true) {
        if(currentYear%4==0) {
          if(currentYear%100!=0) {
            return currentYear;
          }
          else if (currentYear%400==0) {
            return currentYear;
          }
          currentYear++
        }
       }
     }
  
   return null;
};
