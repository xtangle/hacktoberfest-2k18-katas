import { getFunctionParameters } from "./getFunctionParameters";

describe("getFunctionParameters", () => {
  it("returns empty array for function without arguments", () => {
    const fn = function() {

    };
    expect(getFunctionParameters(fn)).toEqual([]);
  });

  it("returns single item with parameter name for single param function", () => {
    const fn = function(test1) {

    };
    expect(getFunctionParameters(fn)).toEqual(['test1']);
  });

  it('works with arrow functions', () => {
    expect(getFunctionParameters((a, b, c) => '')).toEqual(['a', 'b', 'c']);
  });

  it("returns only parameter name if function has default parameter values", () => {
    const fn = function(name, surname = 'Sanchez') {

    };
    expect(getFunctionParameters(fn)).toEqual(['name', 'surname']);
  });

  it("does not return trailing parameters", () => {
    const fn = (name, ...surname)  => '';
    expect(getFunctionParameters(fn)).toEqual(['name']);
  });
});
