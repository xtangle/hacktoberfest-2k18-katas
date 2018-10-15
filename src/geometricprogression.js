export const geometricprogression = (list) => {
  let ratio = list[1] / list[0];
  for (let i = 2; i < list.length; i += 1) {
    const newRatio = list[2] / list[1];
    if (newRatio !== ratio) return false;
  }
  return true;
};
