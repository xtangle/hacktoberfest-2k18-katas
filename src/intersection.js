export const intersection = (...arrays) => {
  if (arrays.length < 2) return [];

  let set = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    const nset = new Set(arrays[i]);

    set = new Set([...set].filter(x => nset.has(x)));
  }

  return [...set];
};
