import { rgbToHex } from './rgbToHex';

describe('rgbToHex', () => {
  it('Turns rgb array to hex string', () => {
    expect(rgbToHex([90, 0, 0])).toEqual('#5a0000');
    expect(rgbToHex([14, 18, 22])).toEqual('#0e1216');
    expect(rgbToHex([68, 187, 255])).toEqual('#4bf');
    expect(rgbToHex([170, 170, 170])).toEqual('#aaa');
  });

  it('Throw cases', () => {
    expect(() => { rgbToHex([]) }).toThrow();
    expect(() => { rgbToHex({}) }).toThrow();
    expect(() => { rgbToHex(true) }).toThrow();
    expect(() => { rgbToHex(false) }).toThrow();
    expect(() => { rgbToHex(undefined) }).toThrow();
    expect(() => { rgbToHex([null, false]) }).toThrow();
    expect(() => { rgbToHex(['1', '2', '3']) }).toThrow();
    expect(() => { rgbToHex(['asdawd', 2, 3]) }).toThrow();
  });
});
