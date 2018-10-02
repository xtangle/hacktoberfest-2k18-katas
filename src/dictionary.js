export const dictionary = dict => {
  return dict.split(' ').reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }

    return acc;
  }, {});
};