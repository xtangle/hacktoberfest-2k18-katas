import { validateNewPassword } from './validateNewPassword';

describe('validateNewPassword', () => {
  it('require at least 6 characters', () => {
    expect(validateNewPassword('Pwd1!')).toBeFalsy()
    expect(validateNewPassword('Pwd1!?')).toBeTruthy()
  })

  it('require at least an uppercase', () => {
    expect(validateNewPassword('p@ssw0rd')).toBeFalsy()
  })

  it('require at least a lowercase', () => {
    expect(validateNewPassword('P@SSW0RD')).toBeFalsy()
  })

  it('require at least a number', () => {
    expect(validateNewPassword('P@ssword')).toBeFalsy()
  })

  it('require at least a special character (not 0-9, a-z, A-Z)', () => {
    expect(validateNewPassword('Passw0rd')).toBeFalsy()
  })

  it('return true if meet all the requirements above', () => {
    expect(validateNewPassword('P@ssw0rd')).toBeTruthy()
  })
})