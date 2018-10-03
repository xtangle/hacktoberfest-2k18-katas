import { decimalToBinary } from './decimalToBinary';

describe('decimalToBinary', () => {
  it('binary of 2 is 10', () => {
    expect(decimalToBinary(2)).toEqual("10");
  });

  it('binary of 255 is 11111111', () => {
    expect(decimalToBinary(255)).toEqual("11111111");
  });

  it('binary of 11 is 1011', () => {
    expect(decimalToBinary(11)).toEqual("1011");
  });
});