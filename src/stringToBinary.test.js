import { stringToBinary } from './stringToBinary';

describe('stringToBinary', () => {
  it(`binary of an empty string is null`, () => {
    expect(stringToBinary("")).toBeNull();
    expect(stringToBinary(" ")).toBeNull();
  });

  it(`binary conversion of "foobar" returns "01100110 01101111 01101111 01100010 01100001 01110010"`, () => {
    expect(stringToBinary("foobar")).toEqual(`01100110 01101111 01101111 01100010 01100001 01110010`);
  });

  it(`binary conversion of "01101" returns "00110000 00110001 00110001 00110000 00110001"`, () => {
    expect(stringToBinary("01101")).toEqual(`00110000 00110001 00110001 00110000 00110001`);
  });

  it(`binary conversion of case of "Binary is the best" returns "01000010 01101001 01101110 01100001 01110010 01111001 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01110011 01110100 "`, () => {
    expect(stringToBinary("Binary is the best")).toEqual(`01000010 01101001 01101110 01100001 01110010 01111001 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01110011 01110100 `);
  });
});
