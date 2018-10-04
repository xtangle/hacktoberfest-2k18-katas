export const toCamelCase = (str) => {
  return str.split(/[\s_-]/)[0] + str.split(/[\s_-]/).slice(1).map(
      c => c.charAt(0).toUpperCase() + c.substr(1)
    ).join("");
};