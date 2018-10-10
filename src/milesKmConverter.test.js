import { milesKmConverter } from "./milesKmConverter";

describe("milesKmConverter", () => {
  it("convert miles to kilometer", () => {
    expect(milesKmConverter({ miles: 1 })).toBeCloseTo(1.6, 2);
    expect(milesKmConverter({ miles: 150 })).toBeCloseTo(241.4, 2);
    expect(milesKmConverter({ miles: 20 })).toBeCloseTo(32.18, 2);
    expect(
      milesKmConverter({
        miles: 100000000
      })
    ).toBeCloseTo(160934400, 2);
  });

  it("convert kilometer to miles", () => {
    expect(milesKmConverter({ km: 1 })).toBeCloseTo(0.62, 2);
    expect(milesKmConverter({ km: 5654 })).toBeCloseTo(3513.23, 2);
    expect(milesKmConverter({ km: 98327 })).toBeCloseTo(61097.56, 2);
    expect(milesKmConverter({ km: 100 })).toBeCloseTo(62.13, 2);
  });

  it("throw cases", () => {
    expect(milesKmConverter({})).toThrow();
    expect(milesKmConverter({ miles: 1, km: 1.6 })).toThrow();
    expect(milesKmConverter(true)).toThrow();
    expect(milesKmConverter(false)).toThrow();
  });
});
