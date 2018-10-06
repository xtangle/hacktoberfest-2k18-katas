import { kebabCase } from './kebabCase';

describe('kebabCase', () => {
  it(`kebab case of an empty string returns null`, () => {
    expect(kebabCase("")).toBeNull();
    expect(kebabCase(" ")).toBeNull();
  });

  it(`kebab case of "part-time" returns "part-time"`, () => {
    expect(kebabCase("part-time")).toEqual(`part-time`);
  });

  it(`kebab case of "PART-TIME" returns "part-time"`, () => {
    expect(kebabCase("PART-TIME")).toEqual(`part-time`);
  });

  it(`kebab case of "Part Time" returns "part-time"`, () => {
    expect(kebabCase("Part Time")).toEqual(`part-time`);
  });

  it(`kebab case of "part_time" returns "part-time"`, () => {
    expect(kebabCase("part_time")).toEqual(`part-time`);
  });
})
