import { numberToWords } from './numberToWords';

describe('numberToWords', () => {
  it('numberToWords converts numbers to words', () => {
    expect(numberToWords(123)).toEqual('one hundred and twenty three');
    expect(numberToWords(105)).toEqual('one hundred five');
    expect(numberToWords(210)).toEqual('two hundred ten');
    expect(numberToWords(42)).toEqual('forty two');
    expect(numberToWords(999)).toEqual('nine hundred and ninety nine');
    expect(numberToWords(1)).toEqual('one');
    expect(numberToWords(768)).toEqual('seven hundred and sixty eight');
  });

  it('numberToWords throws when not given a number', () => {
    expect(() => numberToWords('hello')).toThrow();
    expect(() => numberToWords()).toThrow();
    expect(() => numberToWords(NaN)).toThrow();
  });
});
