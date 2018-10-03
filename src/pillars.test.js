import { pillars } from "./pillars";

// There are pillars near the road. The distance between the pillars is the same
// and the width of the pillars is the same. Your function accepts three arguments:
//
// - number of pillars (≥ 1);
// - distance between pillars (10 - 30 meters);
// - width of the column (10 - 50 centimeters).
//
// Calculate the distance between the first and the last pillar
// in centimeters (without the width of the first and last pillar).

describe("Pillars tests", function () {
  it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function () {
    expect(pillars(1, 10, 10)).toEqual(0);
  });
  it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function () {
    expect(pillars(2, 20, 25)).toEqual(2000);
  });
  it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function () {
    expect(pillars(11, 15, 30)).toEqual(15270);
  });
});
