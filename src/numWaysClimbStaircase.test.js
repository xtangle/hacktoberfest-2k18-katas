import { numWaysClimbStaircase } from "./numWaysClimbStaircase"

describe('the staircase problem', () => {
  it('counts the numbers of ways to climb the stairs with 0 steps', () => {
    const result = numWaysClimbStaircase(0)
    expect(result).toEqual(1)
  })
  it('counts the numbers of ways to climb the stairs with 1 step', () => {
    const result = numWaysClimbStaircase(1)
    expect(result).toEqual(1)
  })
  it('counts the numbers of ways to climb the stairs with 2 steps', () => {
    const result = numWaysClimbStaircase(2)
    expect(result).toEqual(2)
  })
  it('counts the numbers of ways to climb the stairs with 3 steps', () => {
    const result = numWaysClimbStaircase(3)
    expect(result).toEqual(3)
  })
  it('counts the numbers of ways to climb the stairs with 4 steps', () => {
    const result = numWaysClimbStaircase(4)
    expect(result).toEqual(5)
  })
  it('counts the numbers of ways to climb the stairs with 5 steps', () => {
    const result = numWaysClimbStaircase(5)
    expect(result).toEqual(8)
  })
  it('counts the numbers of ways to climb the stairs with 6 steps', () => {
    const result = numWaysClimbStaircase(6)
    expect(result).toEqual(13)
  })
  it('supports changing the size of the steps', () => {
    const result = numWaysClimbStaircase(6, [1, 2, 3])
    expect(result).toEqual(24)
  })
})
