import { reverseString } from './reverseString';

describe('reverseString', () => {
  it('reverse of "hello" is "olleh"', () => {
    expect(reverseString('hello')).toEqual('olleh')
  });

  it('reverse of "i love cheese" is "eseehc evol i"', () => {
    expect(reverseString('i love cheese')).toEqual('eseehc evol i')
  })
})