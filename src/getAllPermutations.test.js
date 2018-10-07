import { getAllPermutations } from './getAllPermutations';
import { permutation } from './getAllPermutation';

describe('permutation', () => {
  it('works with numbers', () => {
    const permutations = getAllPermutations(12);

    expect(permutations).toEqual([ "12", "21"]);
  });

  it('Works with characters', () => {
    const permutations = getAllPermutations("ABC");

    expect(permutations).toEqual([
      "ABC",
      "ACB",
      "BAC",
      "BCA",
      "CAB",
      "CBA",
    ]);
  });

  it('Works with Characters and numbers', () => {
    const permutations = getAllPermutations("AB12");

    expect(permutations).toEqual(["AB12", "AB21", "A1B2", "A12B", "A2B1", "A21B", "BA12", "BA21", "B1A2", "B12A", "B2A1", "B21A", "1AB2", "1A2B", "1BA2", "1B2A", "12AB", "12BA", "2AB1", "2A1B", "2BA1", "2B1A", "21AB", "21BA"]);
  });
});
