export const deepCopyObject = (objToCopy) => {
  return JSON.parse(JSON.stringify(objToCopy));
};
