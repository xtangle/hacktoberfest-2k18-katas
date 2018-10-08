import { alternatingSums } from './alternatingSums';


describe('alternatingSums', () => {
  it('calculates the sum of alternate elements of array and returns the two sums in array', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105]);
    expect(alternatingSums([100, 50, 50, 100])).toEqual([150, 150]);
  });

  it('if input array contains two elements, returns the same array', () => {
    // TODO Your own assertion here
    expect(alternatingSums([100, 50])).toEqual([100, 50]);
    
  });

  it('if input array contains 1 element or less, returns the answer in correct format', () => {
    expect(alternatingSums([80])).toEqual([80, 0]);
    expect(alternatingSums([])).toEqual([0, 0]);
  });
});
