export const assign = (target, ...sources) => {
  sources.forEach((source) => {
    if (source) {
      Object.keys(source).map(key => target[key] = source[key]);
    }
  });
  return target;
};
