import { removeItems } from './removeItems';

describe('removeItems', () => {
  it('returns undefined with invalid arguments', () => {
    expect(removeItems()).toBeUndefined();
    expect(removeItems('foo')).toBeUndefined();
    expect(removeItems(100)).toBeUndefined();
    expect(removeItems(null)).toBeUndefined();
    expect(removeItems({ bar: 'baz' })).toBeUndefined();
    expect(removeItems(true)).toBeUndefined();
    expect(removeItems(undefined)).toBeUndefined();
  });

  it('removes given items from the array(first argument)', () => {
    expect(removeItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 2, 3, 4, 5)).toEqual([6, 7, 8, 9, 10]);
    expect(removeItems(['Pete', 'Andrew', 'Michelle', 'Alex'], 'Andrew', 'Michelle')).toEqual(['Pete', 'Alex']);
  });

  it('removeItems to remove nothing if only one argument is given', () => {
    expect(removeItems(['foo', 'bar'])).toEqual(['foo', 'bar']);
  });

  it('removeItems to remove nothing if no items match with the array', () => {
    expect(removeItems(['burger', 'fries', 'soda'], 'apple', 'banana')).toEqual(['burger', 'fries', 'soda']);
  });
});
