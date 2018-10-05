import { toPascalCase } from './toPascalCase';

describe('toPascalCase', () => {
  it('remove spaces and convert first letter of word to uppercase', () => {
      expect(toPascalCase('I am pascalCase')).toEqual('IAmPascalCase');
      expect(toPascalCase('i am pascalCase')).toEqual('IAmPascalCase');
  });

  it('remove hypens and convert first letter of word to uppercase', () => {
    expect(toPascalCase('front-end-developer')).toEqual('FrontEndDeveloper');
    expect(toPascalCase('Front-end-developer')).toEqual('FrontEndDeveloper');
  });

  it('remove underscores and convert first letter of word to uppercase', () => {
    expect(toPascalCase('lets_go_to_the_gym')).toEqual('LetsGoToTheGym');
    expect(toPascalCase('Lets_go_to_the_gym')).toEqual('LetsGoToTheGym');
  });

  it('converts camel case to pascal case', () => {
    expect(toPascalCase('areWeThereYet')).toEqual('AreWeThereYet');
    expect(toPascalCase('')).toEqual('LetsGoToTheGym');
  });
})