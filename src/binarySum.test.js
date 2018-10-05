import { binarySum } from './binarySum';

describe('binarySum', () => {
  it('11 + 11', () => {
    expect(binarySum('11', '11')).toEqual(6);
  });

  it('10 + 01', () => {
    expect(binarySum('10', '01')).toEqual(3);
  });

  it('01 + 01', () => {
    expect(binarySum('01', '01')).toEqual(2);
  });
})