import { diceRoll } from './diceRoll';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(diceRoll()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(diceRoll()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(diceRoll()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(diceRoll()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { diceRoll(); }).toThrow();
 */

describe('diceRoll', () => {
  it('diceRoll does this thing...', () => {
    expect(diceRoll(6)).to.be.within(1, 6);
  });

  it('diceRoll does this thing...', () => {
    expect(diceRoll(3)).to.be.within(1, 3);
  });

  it('diceRoll does this thing...', () => {
    expect(diceRoll(20)).to.be.within(1, 20);
  });
});
