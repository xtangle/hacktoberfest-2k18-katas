export const filterByType = (values, type) => {
  if (values && type) {
    return values.filter(value => typeof value === type);
  } else {
    return null;
  }
};
