export const getNextLeapYear = (year) => {
  if(year == null)
    return null
  var currentYear = 1;
  if(Object.prototype.toString.call(d) === "[object Date]") {
    currentYear = year.getFullYear()+1;
    while (true) {
      if(currentYear%4==0) {
        if(currentYear%100!=0) {
          return currentYear;
        }
        else if (currentYear%400==0) {
          return currentYear;
        }
      }
      currentYear++	  
    }
  }
     if(!isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10))) {
        currentYear=year+1;
        while (true) {
			if(currentYear%4==0) {
			  if(currentYear%100!=0) {
				return currentYear;
			  }
			  else if (currentYear%400==0) {
				return currentYear;
			  }
			}
			currentYear++;
       }
     }
  
   return null;
};
