import { basicOp } from "./basicMath";

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
describe("BasicMath", () => {
  it("should add two numbers", () => {
    expect((basicOp("+", 4, 7), 11));
  });
  it("should substract two numbers", () => {
    expect(basicOp("-", 15, 18), -3);
  });
  it("should multiply two numbers properly", () => {
    expect(basicOp("*", 5, 5), 25);
  });
  it("should divide two numbers properly", () => {
    expect(basicOp("/", 49, 7), 7);
  });
});
