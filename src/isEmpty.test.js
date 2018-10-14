import { isEmpty } from "./isEmpty";

describe("isEmpty", () => {
  it("isEmpty returns true for empty objects", () => {
    expect(isEmpty({})).toBeTruthy();
  });

  it("isEmpty returns true for empty arrays", () => {
    expect(isEmpty([]).toBeTruthy());
  });

  it("isEmpty to return true for empty strings", () => {
    expect(isEmpty("").toBeTruthy());
  });

  it("isEmpty to return true for null", () => {
    expect(isEmpty(null).toBeTruthy());
  });

  it("isEmpty to return true for undefined", () => {
    expect(isEmpty(undefined).toBeTruthy());
    expect(isEmpty().toBeTruthy());
  });

  it("isEmpty to return false for literally everything else", () => {
    expect(isEmpty({ hi: "hi" }).toBeFalsy());
    expect(isEmpty([1, 2, 3]).toBeFalsy());
    expect(isEmpty("hello").toBeFalsy());
    expect(isEmpty(123).toBeFalsy());
    expect(isEmpty(true).toBeFalsy());
    expect(isEmpty(false).toBeFalsy());
  });
});
