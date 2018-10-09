import { isDollar } from './isDollar';

describe('isDollar', () => {
  it('returns true for correctly formatted string', () => {
    expect(isDollar( '$100' )).toBe( true );
    expect(isDollar( '$25.08' )).toBe( true );
    expect(isDollar( '$9.13' )).toBe( true );
    expect(isDollar( '$2,024,002.00' )).toBe( true );
    expect(isDollar( '$10,955,719.99' )).toBe( true );
    expect(isDollar( '$30,633,318' )).toBe( true );
    expect(isDollar( '$999,999,999.99' )).toBe( true );
  });

  it('returns false for incorrectly formatted string', () => {
    expect(isDollar( '34,767.69' )).toBe( false );
    expect(isDollar( '$,534.34' )).toBe( false );
    expect(isDollar( '$79,368.3' )).toBe( false );
    expect(isDollar( '$34,794.474' )).toBe( false );
    expect(isDollar( '$55,371_30' )).toBe( false );
    expect(isDollar( '$3,135,13.12' )).toBe( false );
    expect(isDollar( '$3,432,1,034.12' )).toBe( false );
    expect(isDollar( '4$3,432,034.12' )).toBe( false );
    expect(isDollar( '$2.03.45' )).toBe( false );
  });

  it('returns undefined for invalid input', () => {
    expect(isDollar()).toBeUndefined();
    expect(isDollar( true )).toBeUndefined();
    expect(isDollar( 100 )).toBeUndefined();
    expect(isDollar( null )).toBeUndefined();
    expect(isDollar( undefined )).toBeUndefined();
    expect(isDollar([ 'foo', 'bar', '$1' ])).toBeUndefined();
    expect(isDollar({ hello: 'world' })).toBeUndefined();
  });
});
