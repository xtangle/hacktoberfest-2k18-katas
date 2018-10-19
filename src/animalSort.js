export const animalSort = (animals) => {
  return animals.sort((a, b) => {
    // Sort based on number of legs
    if (a.numberOfLegs > b.numberOfLegs) {
      return 1;
    } else if (a.numberOfLegs === b.numberOfLegs) {
      // Sort based on name
      if (a.name > b.name) {
        return 1;
      }
    }
    return -1;
  });
};
