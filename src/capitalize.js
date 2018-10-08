export const capitalize = (string) => {
  if (typeof(string) === String || string === "") {
    throw Error();
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
};
