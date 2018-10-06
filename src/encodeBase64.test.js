import { encodeBase64 } from './encodeBase64';

describe('encodeBase64', () => {
  it('encode hello world', () => {    
    expect(encodeBase64("hello world")).toEqual("aGVsbG8gd29ybGQ=");
  });

  it('encode i love base64', () => {
    expect(encodeBase64("i love base64")).toEqual("aSBsb3ZlIGJhc2U2NA==");
  });
});
