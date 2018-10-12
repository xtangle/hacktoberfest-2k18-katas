import { every } from './every';

const arr = [1, 2, 3, 4, 5]

describe('every', () => {
  it('check if every element in the given array meets a specified condition', () => {
    expect(every(arr, el => el > 0)).toBeTruthy()
  });

  it('returns false if one of the elements of the condition does not meet the condition', () => {
    expect(every(arr, el => el > 4)).toBeFalsy()
  });

  it('shortcircuits and stops iterating if an element does not meet the condition', () => {
    let count = 0
    expect(every(arr, el => {
      count++
      return el > 2
    })).toBeFalsy()
    expect(count).toEqual(1)
  });
});
