export const pokemonTypeDamageModifier = (attackingType, defendingType) => {
  // TO IMPLEMENT IN ANOTHER PR

  // The tests will cover 'fire', 'water', and 'grass' only

  const isEqualToOneOf = (value, options) =>
    !!options.find(option => option === value);

  const validElements = ["fire", "grass", "water"];

  if (
    !isEqualToOneOf(attackingType, validElements) ||
    !isEqualToOneOf(defendingType, validElements)
  ) {
    throw new Error();
  }

  if (attackingType === "fire" && defendingType === "water") {
    return 0.5;
  }

  if (attackingType === "fire" && defendingType === "fire") {
    return 0.5;
  }

  if (attackingType === "fire" && defendingType === "grass") {
    return 2;
  }

  if (attackingType === "water" && defendingType === "water") {
    return 0.5;
  }

  if (attackingType === "water" && defendingType === "fire") {
    return 2;
  }

  if (attackingType === "water" && defendingType === "grass") {
    return 0.5;
  }

  if (attackingType === "grass" && defendingType === "water") {
    return 2;
  }

  if (attackingType === "grass" && defendingType === "fire") {
    return 0.5;
  }

  if (attackingType === "grass" && defendingType === "grass") {
    return 0.5;
  }
};
