import { hexToOctal } from './hexToOctal';

describe('hexToOctal', () => {
  it('gives the correct output', () => {
    expect(hexToOctal(0)).toEqual(0);
    expect(hexToOctal(0xFFF)).toEqual(7777);
    expect(hexToOctal("DEBC97")).toEqual(67536227);
  });
});
