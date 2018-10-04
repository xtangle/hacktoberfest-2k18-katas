export const isObject = (value) => {
  if(value !== null && (typeof value === "object" || typeof value === "function")){
    return true;
  }
  return false;
};
