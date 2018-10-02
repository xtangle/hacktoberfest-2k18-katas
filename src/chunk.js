export const chunk = (arr, chunkSize) => {
  const cache = []
  const temp = [...arr]
  if (typeof(chunkSize) == 'number' && chunkSize % 1 === 0)  {
    while (temp.length) {
      cache.push(temp.splice(0, chunkSize))
    }
  }
  return cache
}
