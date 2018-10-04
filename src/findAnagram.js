export const findAnagram = (arr) => {
  return arr.filter( (el, i, newArr) => {
    return newArr
      .filter((str, index) => i != index)
      .map( str => str.split('').sort().join(''))
      .includes(el.split('').sort().join(''))
  })
}
