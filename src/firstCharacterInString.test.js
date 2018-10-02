import { firstCharacterInString } from './firstCharacterInString';

describe('firstCharacterInString', () => {
  it('returns the first characters H and W', () => {
    expect(firstCharacterInString("Hello World")).toEqual(['H', 'W']);
  });

  it('returns the first characters T A i and 4', () => {
    expect(firstCharacterInString("The Answer is 42")).toEqual(['T', 'A', 'i', '4']);
  });

  it('returns the string equivalent and the first character 4', () => {
    expect(firstCharacterInString(42)).toEqual(['4']);
  });
})