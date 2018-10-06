export const transformMatchingKeys = (obj, key, fn) => {
  return iterator(obj, key, fn);
};

const iterator = function it(value, name, fn) {
  const data = JSON.parse(JSON.stringify(value));

  for (let key in data) {
    if (key === name) {
      data[key] = fn(data[key]);
    }

    if (typeof data[key] === 'object') {
      data[key] = it(data[key], name, fn);
    }
  }

  return data;
};
