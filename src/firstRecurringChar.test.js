import { firstRecurringChar } from './firstRecurringChar';

describe('firstRecurringChar', () => {
  it('returns the first recurring character', () => {
    expect(firstRecurringChar('foo')).toEqual('o');
  });

  it('returns the first recurring char of lowest index', () => {
    expect(firstRecurringChar('baarfoo')).toEqual('a');
  });

  it('returns null otherwise', () => {
    expect(firstRecurringChar(123)).toEqual(null);
    expect(firstRecurringChar({xyz : 123})).toEqual(null);
    expect(firstRecurringChar()).toEqual(null);
    expect(firstRecurringChar(null)).toEqual(null);
    expect(firstRecurringChar(undefined)).toEqual(null);
  });

})
