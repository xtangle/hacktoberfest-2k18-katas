import { pokemonTypeDamageModifier } from './pokemonTypeDamageModifier';

describe('pokemonTypeDamageModifier', () => {
  it('pokemonTypeDamageModifier damage modifiers for each attacking type', () => {
    expect(() => pokemonTypeDamageModifier('fire', 'water')).toEqual(0.5);
    expect(() => pokemonTypeDamageModifier('fire', 'fire')).toEqual(0.5);
    expect(() => pokemonTypeDamageModifier('fire', 'grass')).toEqual(2);
    expect(() => pokemonTypeDamageModifier('water', 'water')).toEqual(0.5);
    expect(() => pokemonTypeDamageModifier('water', 'fire')).toEqual(2);
    expect(() => pokemonTypeDamageModifier('water', 'grass')).toEqual(0.5);
    expect(() => pokemonTypeDamageModifier('grass', 'water')).toEqual(2);
    expect(() => pokemonTypeDamageModifier('grass', 'fire')).toEqual(0.5);
    expect(() => pokemonTypeDamageModifier('grass', 'grass')).toEqual(0.5);
  });

  it('pokemonTypeDamageModifier only accepts fire, water, or grass', () => {
    expect(() => pokemonTypeDamageModifier('', 'grass')).toThrow();
    expect(() => pokemonTypeDamageModifier('grass', '')).toThrow();
    expect(() => pokemonTypeDamageModifier(1, 'grass')).toThrow();
    expect(() => pokemonTypeDamageModifier('grass', 1)).toThrow();
    expect(() => pokemonTypeDamageModifier('grass', 'electric')).toThrow();
    expect(() => pokemonTypeDamageModifier('electric', 'grass')).toThrow();
  });
});
