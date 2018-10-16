export const isWordSorted = (str) => {
  let order = 0
  return str
    .toLowerCase()
    .replace(/\W/gi, '')
    .split('')
    .reduce((acc, el, i, arr) => {
      if (i === 1) order = el.charCodeAt(0) >= arr[i - 1].charCodeAt(0) ? 1 : -1
      if (acc && i !== 0) {
        return order === 1 ? el.charCodeAt(0) >= arr[i - 1].charCodeAt(0) : el.charCodeAt(0) <= arr[i - 1].charCodeAt(0)
      } else {
        return acc
      }
    }, true)
};
