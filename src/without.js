export const without = (array, ...values) => {

  const set = new Set(values);
  return array.filter(x => !set.has(x));
};
