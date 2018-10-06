export const longestUniqueSubstring = s => {
  if (typeof s != 'string') throw 'Input should be a string'

  let lus = '' //longest unique substring

  for (let i = 1, start = 0; i <= s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) != 1) {
      let us = s.substring(start, i)
      if (us.length > lus.length) lus = us
      start = i
    }
  }

  return lus
};