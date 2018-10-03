import { isValidIP } from './isValidIP';

describe('isValidIP', () => {
  it('Test valid IPV4 Address', () => {
    expect(isValidIP("12.45.56.243")).toBeTruthy();
  });

  it('Test valid IPV6 Address', () => {
    expect(isValidIP("3ffe:1900:4545:3:200:f8ff:fe21:67cf")).toBeTruthy();
  });

  it('Test Invalid IPV4 Address', () => {
    expect(isValidIP("12.45.56.345")).toBeFalsy();
  });

  it('Test Invalid IPV6 Address', () => {
    expect(isValidIP("3ffe:1900:4545:3:200:f8ff")).toBeFalsy();
  });
})
