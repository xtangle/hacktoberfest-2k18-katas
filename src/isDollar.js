export const isDollar = (value) => {
  if (typeof value !== 'string') {
    return;
  }

  const regexp = /^\$\d{1,3}(([,]\d{3})*)?([.]\d{2})?$/;

  return regexp.test(value);
};
