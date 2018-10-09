export const isValidSchedule = (lessons) => {
  /*
   * Step 1: Filter lessons by days using a for-loop
   * Step 2: For each day, sort the lessons by the starting time
   * Step 3: Check if the ending time is larger than the starting time of the next lesson
   * Step 4: Return false immediately if timing clashes
   */
  
  const weekdays = ['m', 't', 'w', 'h', 'f'];
  const numOfDays = 5;
  
  // Step 1
  for (var i=0; i<numOfDays; i++) {
    var weekday = weekdays[i];
	var dailyLessons = lessons.filter(function(d) {
	  return d.day.includes(weekday);
	});
	
	// Step 2
	dailyLessons.sort(function(lessonA, lessonB) { 
	  return lessonA.timeBegin - lessonB.timeBegin;
	});
	
	var numOfDailyLessons = dailyLessons.length;
	
	// Step 3
	for (var j=0; j<numOfDailyLessons-1; j++) {
	  if (dailyLessons[j].timeEnd >= dailyLessons[j+1].timeBegin) {
		// Step 4
	    return false;
	  }
	}
  }
  return true;
};
