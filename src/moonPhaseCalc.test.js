import { moonPhaseCalc } from './moonPhaseCalc';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(moonPhaseCalc()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(moonPhaseCalc()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(moonPhaseCalc()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(moonPhaseCalc()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { moonPhaseCalc(); }).toThrow();
 */

describe('moonPhaseCalc', () => {
  it('Tells you the phase of the moon based on date (mmddyyyy)', () => {
    // TODO Your own assertion here
    expect(moonPhaseCalc('10182018')).toEqual('Waxing Gibbous');
    expect(moonPhaseCalc('12252018')).toEqual('Waning Gibbous');
    expect(moonPhaseCalc('12132018')).toEqual('Waxing Crescent');
    expect(moonPhaseCalc('12312018')).toEqual('Waning Crescent');
    expect(moonPhaseCalc('07042019')).toEqual('New Moon');
    expect(moonPhaseCalc('07162019')).toEqual('Full Moon');
  });
});
