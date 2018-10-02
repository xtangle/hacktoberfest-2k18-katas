import { fizzBuzz } from './fizzBuzz'

describe('fizzBuzz', () => {
  it('All numbers dividable by 3 should be changed to "fizz"', () => {
    expect(fizzBuzz([1, 2, 3])).toBeTruthy([1, 2, 'fizz'])
  })

  it('All numbers dividable by 5 should be changed to "buzz"', () => {
    expect(fizzBuzz([1, 2, 3, 4, 5, 6])).toBeTruthy([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz'
    ])
  })

  it('All numbers dividable by both 3 and 5 should be changed to "fizzbuzz"', () => {
    expect(fizzBuzz([3, 4, 5, 6, 15])).toBeTruthy([
      'fizz',
      4,
      'buzz',
      'fizz',
      'fizzbuzz'
    ])
  })
})
