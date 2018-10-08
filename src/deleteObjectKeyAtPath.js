export const deleteObjectKeyAtPath = (obj, path) => {
  const keys = path.split('.');
  const lastKey = keys.pop();
  let target = obj;
  while (target && keys.length > 0) {
    const key = keys.shift();
    target = target[key];
  }
  if (target && typeof target === 'object' && target[lastKey]) {
    delete target[lastKey];
  } else {
    throw new Error('Path not found!');
  }
  return obj;
};
