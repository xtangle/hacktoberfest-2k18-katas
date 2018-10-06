const Q = {
  '<': -1,
  '=': 0,
  '>': 1
}

export const evalOrQuery = (arr, query, comparator) => {
  if (!query || !Object.keys(query).length) return arr

  let rt = []
  for (let e of arr) {
    for (let q in query) {
      if (Q[q] == comparator(e, query[q])) {
        rt.push(e)
        break
      }
    }
  }

  return rt
};