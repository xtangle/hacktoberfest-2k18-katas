export const memoize = (func) => {
  const valueCache = new Map();
  return (...args) => {
    const cacheKey = args.join(',')
    if (valueCache.has(cacheKey)) {
      return valueCache.get(cacheKey);
    }
    const result = func.call(this, ...args);
    valueCache.set(cacheKey, result);
    return result;
  }
};
