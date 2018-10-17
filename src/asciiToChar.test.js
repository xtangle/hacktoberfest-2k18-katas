import { asciiToChar } from './asciiToChar';



describe('asciiToChar', () => {
  it('asciiToChar does this thing...', () => {
    expect(asciiToChar(48)).toEqual('0');
  });
  it('asciiToChar does this thing...', () => {
    expect(asciiToChar(49)).toEqual('1');
  });
  it('asciiToChar does this thing...', () => {
    expect(asciiToChar(97)).toEqual('a');
  });
  it('asciiToChar does this thing...', () => {
    expect(asciiToChar(65)).toEqual('A');
  });
  
});
