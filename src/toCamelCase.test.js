import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
  it('remove spaces and convert first letter of word to uppercase', () => {
    expect(toCamelCase('i am camelCase')).toEqual('iAmCamelCase');
    expect(toCamelCase('I am camelCase')).toEqual('IAmCamelCase');
  });

  it('remove hypens and convert first letter of word to uppercase', () => {
    expect(toCamelCase('front-end-developer')).toEqual('frontEndDeveloper');
    expect(toCamelCase('Front-end-developer')).toEqual('FrontEndDeveloper');
  });

  it('remove underscores and convert first letter of word to uppercase', () => {
    expect(toCamelCase('lets_go_to_the_gym')).toEqual('letsGoToTheGym');
    expect(toCamelCase('Lets_go_to_the_gym')).toEqual('LetsGoToTheGym');
  });
})