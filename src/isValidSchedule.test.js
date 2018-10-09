import { isValidSchedule } from './isValidSchedule';
/*
      - isValidSchedule takes an array of objects.
      - each object represents a class and is of the form: {'day':'mwf', 'name':'english101', 'timeBegin':800, 'timeEnd':850}
      - the times are in 24-hour clock time.  noon = 1200, 11 pm = 2300
      - 8 o'clock a.m. is represented by the integer 800
      - 8:50 a.m. is represented by the integer 850
      - 2 p.m. would be 1400

      - The other important attribute is the key/value pair 'day.
      - A class that meets on mondays and wednesdays would be, 'day': 'mw'
      - A class that meets only on tuesday would be, 'day': 't'
      - A class that meets only on thursday would be, 'day': 'h'
      - A class that meets on tuesdays and thursdays would be, 'day': 'th'
      - A class that meets on monday, wednesday and friday would be, 'day': 'mwf'
 */

describe('isValidSchedule', () => {
  it('should pass with this schedule of classes', () => {
    let validSchedule = [
      {'day':'mwf', 'name':'english101', 'timeBegin':800, 'timeEnd':850},
      {'day':'mw', 'name':'math105', 'timeBegin':1100, 'timeEnd':1150},
      {'day':'mw', 'name':'geography110', 'timeBegin':900, 'timeEnd':1000},
      {'day':'th', 'name':'cs100', 'timeBegin':900, 'timeEnd':1000},
      {'day':'h', 'name':'cs120', 'timeBegin':700, 'timeEnd':850}
    ]
    expect( isValidSchedule(validSchedule) ).toBe(true);
  });

  it('should also pass with this schedule of classes', () => {
    let validSchedule = [
      {'day':'mwf', 'name':'english101', 'timeBegin':800, 'timeEnd':850},
      {'day':'mw', 'name':'math105', 'timeBegin':1100, 'timeEnd':1150},
      {'day':'mw', 'name':'geography110', 'timeBegin':900, 'timeEnd':1000},
      {'day':'mw', 'name':'tennis101', 'timeBegin':1500, 'timeEnd':1600},
      {'day':'f', 'name':'music150', 'timeBegin':900, 'timeEnd':1000}
    ]
    expect( isValidSchedule(validSchedule) ).toBe(true);
  });

  it('should NOT pass with this schedule of classes', () => {
    let invalidSchedule = [
      {'day':'mwf', 'name':'english101', 'timeBegin':800, 'timeEnd':850},
      {'day':'mw', 'name':'math105', 'timeBegin':750, 'timeEnd':950}
    ]
    expect( isValidSchedule(invalidSchedule) ).toBe(false);
  });

  it('should also NOT pass with this schedule of classes', () => {
    let invalidSchedule = [
      {'day':'th', 'name':'english101', 'timeBegin':800, 'timeEnd':850},
      {'day':'h', 'name':'math105', 'timeBegin':850, 'timeEnd':950}
    ]
    expect( isValidSchedule(invalidSchedule) ).toBe(false);
  });
});
