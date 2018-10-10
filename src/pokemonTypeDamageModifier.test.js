import { pokemonTypeDamageModifier } from "./pokemonTypeDamageModifier";

describe("pokemonTypeDamageModifier", () => {
  it("should handle damage modifiers for fire attacking water", () => {
    expect(pokemonTypeDamageModifier("fire", "water")).toEqual(0.5);
  });
  it("should handle damage modifiers for fire attacking fire", () => {
    expect(pokemonTypeDamageModifier("fire", "fire")).toEqual(0.5);
  });

  it("should handle damage modifiers for fire attacking grass", () => {
    expect(pokemonTypeDamageModifier("fire", "grass")).toEqual(2);
  });

  it("should handle damage modifiers for water attacking water", () => {
    expect(pokemonTypeDamageModifier("water", "water")).toEqual(0.5);
  });

  it("should handle damage modifiers for water attacking fire", () => {
    expect(pokemonTypeDamageModifier("water", "fire")).toEqual(2);
  });

  it("should handle damage modifiers for water attacking grass", () => {
    expect(pokemonTypeDamageModifier("water", "grass")).toEqual(0.5);
  });

  it("should handle damage modifiers for grass attacking water", () => {
    expect(pokemonTypeDamageModifier("grass", "water")).toEqual(2);
  });

  it("should handle damage modifiers for grass attacking fire", () => {
    expect(pokemonTypeDamageModifier("grass", "fire")).toEqual(0.5);
  });
  it("should handle damage modifiers for grass attacking grass", () => {
    expect(pokemonTypeDamageModifier("grass", "grass")).toEqual(0.5);
  });

  it("should only accept fire, water, or grass", () => {
    expect(() => pokemonTypeDamageModifier('', 'grass')).toThrow();
    expect(() => pokemonTypeDamageModifier('grass', '')).toThrow();
    expect(() => pokemonTypeDamageModifier(1, 'grass')).toThrow();
    expect(() => pokemonTypeDamageModifier('grass', 1)).toThrow();
    expect(() => pokemonTypeDamageModifier('grass', 'electric')).toThrow();
    expect(() => pokemonTypeDamageModifier('electric', 'grass')).toThrow();
  });
});
