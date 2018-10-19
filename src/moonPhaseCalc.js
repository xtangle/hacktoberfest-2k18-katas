export const moonPhaseCalc = (date) => {
  function formatDate(d) {
    var a = d.split('')
    var day = []
    var month = []
    var year = []
    month.push(a[0],a[1])
    day.push(a[2],a[3])
    year.push(a[4],a[5],a[6],a[7])
    return {day: day, month: month, year: year}
  }
  function Simple(da) {
      var year = parseInt(da.year.join(''))
      var month = parseInt(da.month.join(''))
      var day = parseInt(da.day.join(''))
      var lp = 2551443; 
      var now = new Date(year,month-1,day,20,35,0);						
      var new_moon = new Date(1970, 0, 7, 20, 35, 0);
      var phase = ((now.getTime() - new_moon.getTime())/1000) % lp;
      return Math.floor(phase /(24*3600)) + 1;
    }
  var aaa = Simple(formatDate(date))
  console.log(aaa)
  if (aaa <= 3) {
    return 'New Moon'
  }
  else if(3 < aaa && aaa < 7) {
    return 'Waxing Crescent'
  }
  else if(aaa == 7) {
    return 'First Quarter'
  }
  else if(7 < aaa && aaa < 15) {
    return 'Waxing Gibbous'
  }
  else if(aaa == 15) {
    return 'Full Moon'
  }
  else if(15 < aaa && aaa < 22) {
    return 'Waning Gibbous'
  }
  else if(aaa == 22) {
    return 'Third Quater'
  }
  else if(22 < aaa && aaa < 29) {
    return 'Waning Crescent'
  }
  else if(aaa == 29) {
    return 'New Moon'
  }
  return aaa
};
