export const falsyFind = (set, predicate) => {
  const predicateConstructor = predicate ? predicate.constructor : null;
  let firstFalsy;
  if (!predicate || predicateConstructor !== Function) {
    throw new Error('predicate must be a function');
  }

  if (typeof set === 'string' || set instanceof String) {
    set = set.split('');
  }

  set.forEach((element, i) => {
    if (!predicate(element, i) && !firstFalsy) firstFalsy = element;
  });

  return firstFalsy;
};
