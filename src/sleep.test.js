import { sleep } from './sleep';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(sleep()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(sleep()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(sleep()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(sleep()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { sleep(); }).toThrow();
 */

describe('sleep', () => {
  it('when timer is negative', async () => {
    expect(() => { sleep(-1); }).toThrow();
  });

  it('sleep for n seconds', async () => {
    const started = Date.now();
    await sleep(1000);
    const ended = Date.now();
    expect(ended-started).toBeGreaterThan(1000);
  });

  it('multiple sleeps should add all the timers', async () => {
    const started = Date.now();
    await sleep(1000);
    await sleep(2000);
    const ended = Date.now();
    expect(ended-started).toBeGreaterThan(3000);
  });
});
