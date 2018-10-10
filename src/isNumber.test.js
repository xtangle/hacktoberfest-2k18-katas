import {isNumber} from './isNumber'

describe('isNumber', () => {
  
  it('0 is valid number', () => {
    expect(isNumber('0')).toBeTruthy();
  });

  it('1234 is valid number', () => {
    expect(isNumber('1234')).toBeTruthy();
  });

  it('-1234 is valid number', () => {
    expect(isNumber('-1234')).toBeTruthy();
  });
  
  it('12.34 is valid number', () => {
    expect(isNumber('12.34')).toBeTruthy();
  });
  
  it('-12.34 is valid number', () => {
    expect(isNumber('-12.34')).toBeTruthy();
  });

  it('10k2 is invalid number', () => {
    expect(isNumber('10k2')).toBeFalsy();
  });

  it('abc is invalid number', () => {
    expect(isNumber('abc')).toBeFalsy();
  });

  it('1/2 is invalid number', () => {
    expect(isNumber('1/2')).toBeFalsy();
  });

  it('10.+2 is invalid number', () => {
    expect(isNumber('10.+2')).toBeFalsy();
  });

  it('33#5 is invalid number', () => {
    expect(isNumber('33#5')).toBeFalsy();
  });

});
