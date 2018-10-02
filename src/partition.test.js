import { partition } from './partition';

describe('partition', () => {
  it('splits an array of integers in two according to a predicate', () => {
    const predicate = n => n % 2 === 0;
    const array = [1, 2, 3, 4, 5, 6];
    const expected = [
      [2, 4, 6], // All the values that pass the predicate
      [1, 3, 5], // All values that do not pass the predicate
    ];

    expect(partition(array, predicate)).toEqual(expected);
  });

  it('splits an array of objects in two according to a predicate', () => {
    const predicate = obj => obj.isHappy === true;
    const array = [
      { name: 'Bob', isHappy: true },
      { name: 'Bill', isHappy: false },
      { name: 'Lucy', isHappy: false },
      { name: 'Melanie', isHappy: true },
    ];
    const expected = [
      // All the values that pass the predicate
      [{ name: 'Bob', isHappy: true }, { name: 'Melanie', isHappy: true }],
      // All values that do not pass the predicate
      [{ name: 'Bill', isHappy: false }, { name: 'Lucy', isHappy: false }],
    ];

    expect(partition(array, predicate)).toEqual(expected);
  });
});
