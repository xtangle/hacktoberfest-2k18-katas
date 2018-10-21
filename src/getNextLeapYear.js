export const getNextLeapYear = (year) => {
  var currentYear = (new Date()).getFullYear()+1;
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
};
