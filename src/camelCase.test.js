import { camelCase } from './camelCase';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(camelCase()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(camelCase()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(camelCase()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(camelCase()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { camelCase(); }).toThrow();
 */

describe('camelCase', () => {
  it('camelCase remoes all spaces and adds a capital to the beginning of the sentence', () => {
    expect(numberOfChars("hello world")).toEqual("HelloWorld");
    expect(numberOfChars("hacktoberfest rocks")).toEqual("HacktoberfestRocks");
    expect(numberOfChars("this is a large test")).toEqual("ThisIsALargeTest");
	expect(numberOfChars("one")).toThrowError("Can't convert single word to camel case");
  });
});



## Details
**Issue you fixed:** #879

**Issue you added:** #YYY

**Name of the function you implemented**: numberOfChars

**Name of the function you added test cases for**: camelCase


## Checklist (won't be merged if they are not all ticked)
- [ ✓] I have asked for this issue, and was assigned it
- [✓ ] I have properly filled the "Details" section above  :arrow_up:
- [✓ ] I didn't modify any test case  :red_circle:
- [✓ ] I have implemented the function and all its tests pass  :white_check_mark:
- [ ✓] I have added a new test case for someone to implement  :new:
- [ ✓] I have created an issue for my new test case  :speak_no_evil:
- [✓ ] I've :star: the repository (or not, all up to you)
- [ ✓✓] And more importantly, I've had fun! :beer:
