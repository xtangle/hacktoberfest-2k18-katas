export const difference = (...args) => {
  if (!Array.isArray(args[0])) {
    return [];
  }

  let source = args.shift();

  args.forEach(diffArray => {
    diffArray.forEach(diffArrayValue => {
      source = source.filter(value => value !== diffArrayValue);
    });
  });

  return source;
};
