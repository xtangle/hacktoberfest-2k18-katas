import { luhnCheck } from './luhnCheck'

describe('luhnCheck', () => {
  it('should check to see if ranges are valid', () => {
    expect(luhnCheck('abcdef')).toBe('invalid input')
    expect(luhnCheck(false)).toBe('invalid input')
    expect(luhnCheck(-1)).toBe('invalid input')
    expect(luhnCheck(0)).toBe('invalid input')
    expect(luhnCheck('asugd9as')).toBe('invalid input')
    expect(luhnCheck(null)).toBe('invalid input')
  })

  it('should validate valid credit cards', () => {
    expect(luhnCheck('378282246310005')).toBeTruthy()
    expect(luhnCheck('4012888888881881')).toBeTruthy()
    expect(luhnCheck('5019717010103742')).toBeTruthy()
    expect(luhnCheck('4111111111111111')).toBeTruthy()
  })

  it('should invalidate invalid credit cards', () => {
    expect(luhnCheck('1234')).toBeFalsy()
    expect(luhnCheck('3782822463')).toBeFalsy()
    expect(luhnCheck('4012888888881834534534581')).toBeFalsy()
  })
})
