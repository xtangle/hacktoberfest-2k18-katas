import { twitterBlockMessageGenerator } from './twitterBlockMessageGenerator';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(twitterBlockMessageGenerator()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(twitterBlockMessageGenerator()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(twitterBlockMessageGenerator()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(twitterBlockMessageGenerator()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { twitterBlockMessageGenerator(); }).toThrow();
 */

describe('twitterBlockMessageGenerator', () => {
  it('twitterBlockMessageGenerator handles valid twitter accounts', () => {
    const test = twitterBlockMessageGenerator(
      ['bill', 'pikachu', 'Char_Mander1987'],
      'Good-Bye, old friend!'
    )

    const passingValue = [
      {
        accountName: 'bill',
        message: 'Good-Bye, old friend!'
      },
      {
        accountName: 'pikachu',
        message: 'Good-Bye, old friend!'
      },
      {
        accountName: 'Char_Mander1987',
        message: 'Good-Bye, old friend!'
      },
    ]

    expect(test).toEqual(passingValue)
  });

  it('twitterBlockMessageGenerator handles empty customMessage', () => {
    expect(() => {
      twitterBlockMessageGenerator(
        ['bill', 'pikachu', 'Char_Mander1987']
      );
    }).toThrow('Custom Message is missing');
  });

  it('twitterBlockMessageGenerator handles invalid account names', () => {
    expect(() => {
      twitterBlockMessageGenerator(
        ['bill!', 'pikachu', 'CharMander1987_'],
        'You shouldn\'t see this'
      );
    }).toThrow('Invalid Account Name');
    expect(() => {
      twitterBlockMessageGenerator(
        ['b@ll', 'pikachu@', 'CharMander!9&7_'],
        'You shouldn\'t see this'
      );
    }).toThrow('Invalid Account Name');
  });
});
