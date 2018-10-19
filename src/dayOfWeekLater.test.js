import { dayOfWeekLater } from './dayOfWeekLater';

describe('dayOfWeekLater', () => {
  it('dayOfWeekLater converts numbers to words', () => {
    expect(dayOfWeekLater('Wed', 2)).toEqual('Fri');
    expect(dayOfWeekLater('Sat', 23)).toEqual('Mon');
    expect(dayOfWeekLater('Tue', 0)).toEqual('Tue');
  });

  it('dayOfWeekLater throws when not given correct args', () => {
    expect(() => dayOfWeekLater('hello', 33)).toThrow();
    expect(() => dayOfWeekLater('Sat')).toThrow();
    expect(() => dayOfWeekLater()).toThrow();
  });
});
