import { stringInterpolation } from './stringInterpolation';

describe('celsiusToFahrenheit', () => {
  it('should convert from Celsius value to Fahrenheit value', () => {
    expect(stringInterpolation("{1}, I am your {2}", [ "Luke", "father!" ])).toEqual("Luke, I am your father!");
    expect(stringInterpolation("{1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}", [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ])).toEqual("10, 20, 30, 40, 50, 60, 70, 80, 90");
    expect(stringInterpolation("{1}'s dead {3}.", [ "Zed", "mate", "baby" ])).toEqual("Zed's dead baby.");
    expect(stringInterpolation("{1} the {3} be with {4}.", [ "May", "April", "force", "you" ])).toEqual("May the force be with you.");
    expect(stringInterpolation("{1} phone {2}.", [ "E.T.", "home", "planet", "mom" ])).toEqual("E.T. phone home.");
    expect(stringInterpolation("Lorem ipsum dolor {1} {2}, consectetur {3} {4}.", [])).toEqual("Lorem ipsum dolor {1} {2}, consectetur {3} {4}.");
    expect(stringInterpolation("Finally, a normal sentence!", ["This", "is", "not", "normal"])).toEqual("Finally, a normal sentence!");
    expect(stringInterpolation("", ["Some", "random", "arguments"])).toEqual("");
  });
});
