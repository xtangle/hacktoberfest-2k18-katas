import { decodeBase64 } from './decodeBase64';

describe('decodeBase64', () => {
  it('decode to hello world', () => {    
    expect(decodeBase64('aGVsbG8gd29ybGQ=')).toEqual('hello world');
  });

  it('decode to i love base64', () => {
    expect(decodeBase64('aSBsb3ZlIGJhc2U2NA==')).toEqual('i love base64');
  });
});
