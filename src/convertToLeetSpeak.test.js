import { convertToLeetSpeak } from './convertToLeetSpeak';

describe('convertToLeetSpeak', () => {
  it('hello world', () => {
    expect(convertToLeetSpeak('hello world')).toEqual('h3ll0 w0rld');
  });

  it('hacktoberfest is fun', () => {
    expect(convertToLeetSpeak('hacktoberfest is fun')).toEqual('h4ck70b3rf357 15 fun');
  });

  it('empty string returns empty string', () => {
    expect(convertToLeetSpeak('')).toEqual('');
  });
})