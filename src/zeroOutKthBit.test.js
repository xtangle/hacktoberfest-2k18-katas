import { zeroOutKthBit } from './zeroOutKthBit';

describe('zeroOutKthBit', () => {
  it('zeroes out the 4th bit of 42', () => {
    // 42 is 10[1]010, zeroing its 4th bit yields 10[0]010, or 34
    expect(zeroOutKthBit(42, 4)).toEqual(34);
  });

  it('does change a thing if the bit was already zero', () => {
    // 50 is 110[0]10, zeroing its 3rd bit yields 110[0]10, or 50
    expect(zeroOutKthBit(50, 3)).toEqual(50);
  });

  it('works on relatively big number', () => {
    // 1001001[1]10011110110100111 <== 19348903
    // 1001001[0]10011110110100111 <== 19217831
    expect(zeroOutKthBit(19348903, 18)).toEqual(19217831);
  });
});
