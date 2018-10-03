import { removeValue } from "./removeValue";

describe("removeValue", () => {
  it("should remove a value in array", () => {
    const data = [1, 2, 3, 4, 5];
    const expected = [1, 3, 4, 5];
    const result = removeValue(data, 2);

    expect(result).toEqual(expected);
  });

  it("should remove same value in array", () => {
    const data = [1, "*", 3, "*", "*", "a"];
    const expected = [1, 3, "a"];
    const result = removeValue(data, "*");

    expect(result).toEqual(expected);
  });
});
