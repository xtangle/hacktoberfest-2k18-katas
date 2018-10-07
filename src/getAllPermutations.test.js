import { getAllPermutations } from './getAllPermutations';

describe('permutation', () => {
  it('works with numbers', () => {
    const permutations = getAllPermutations(12);

    const result = [ "12", "21"];
    result.sort();

    expect(permutations).toEqual(result);
  });

  it('Works with characters', () => {
    const permutations = getAllPermutations("ABC");

    const result = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
    result.sort();

    expect(permutations).toEqual(result);
  });

  it('Works with Characters and numbers', () => {
    const permutations = getAllPermutations("AB12");

    const result = ["AB12", "AB21", "A1B2", "A12B", "A2B1", "A21B", "BA12", "BA21", "B1A2", "B12A", "B2A1", "B21A", "1AB2", "1A2B", "1BA2", "1B2A", "12AB", "12BA", "2AB1", "2A1B", "2BA1", "2B1A", "21AB", "21BA"];
    result.sort();

    expect(permutations).toEqual(result);
  });
});
