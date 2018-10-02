export const isSuffix = (suffix, string) => {
  if (typeof suffix !== 'string' || typeof string !== 'string') {
    return 'argument must be a string'
  }

  return string.endsWith(suffix)
}