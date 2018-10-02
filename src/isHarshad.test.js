import { isHarshad } from './isHarshad'

describe('isHarshad', () => {
  it('Passing the argument 10 should return true', () => {
    expect(isHarshad(10)).toBeTruthy()
  })

  it('Passing the argument 24 should return true', () => {
    expect(isHarshad(24)).toBeTruthy()
  })

  it('Passing the argument 17 should return false', () => {
    expect(isHarshad(17)).toBeFalsy()
  })
})
