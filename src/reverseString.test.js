import { reverseString } from './reverseString';

describe('reverseString', () => {
  it('reverse of "hello" is "olleh"', () => {
    expect(reverseString('hello')).toBeTruthy('olleh')
  });

  it('reverse of "i love cheese" is "eseehc evol i"', () => {
    expect(reverseString('i love cheese')).toBeTruthy('eseehc evol i')
  })
})