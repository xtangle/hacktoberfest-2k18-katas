import { approximately } from './approximately';

describe('approximately', () => {
  it('should behave like equality for margin 0', () => {
    const fn = approximately(0);
    expect(fn(0, 0)).toEqual(true);
    expect(fn(4568, 4568)).toEqual(true);
    expect(fn(123.033, 123.033)).toEqual(true);
    expect(fn(2, 1)).toEqual(false);
  });

  it('should be true for numbers lte the margin smaller', () => {
    const fn5 = approximately(5);

    expect(fn5(15, 9)).toEqual(false);
    expect(fn5(15, 10)).toEqual(true);
    expect(fn5(15, 11)).toEqual(true);
  });

  it('should be true for numbers lte the margin bigger', () => {
    const fn5 = approximately(5);

    expect(fn5(9, 15)).toEqual(false);
    expect(fn5(10, 15)).toEqual(true);
    expect(fn5(11, 15)).toEqual(true);
  });

  it('should handle small margins', () => {
    const fn0005 = approximately(0.005);

    expect(fn0005(50.0015, 50.009)).toEqual(false);
    expect(fn0005(50.0015, 50.0010)).toEqual(true);
    expect(fn0005(50.0015, 50.0011)).toEqual(true);
  });

  it('should handle big margins', () => {
    const fn5000 = approximately(5000);

    expect(fn5000(50000, 44999.99)).toEqual(false);
    expect(fn5000(50000, 45000)).toEqual(true);
    expect(fn5000(50000, 55000)).toEqual(true);
    expect(fn5000(50000, 55000.01)).toEqual(false);
  });

  it('should throw given invalid margins', () => {
    expect(() => approximately()).toThrow();
    expect(() => approximately(-1)).toThrow();
    expect(() => approximately(NaN)).toThrow();
    expect(() => approximately('1')).toThrow();
  });
});
