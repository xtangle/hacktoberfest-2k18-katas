import { gammaFunction } from './gammaFunction';


describe('gammaFunction', () => {
  it('gammaFunction does this thing...', () => {
    expect(gammaFunction(11)).toBe(3628800);
  });
  it('gammaFunction does this thing...', () => {
    expect(gammaFunction(4)).toBe(6);
  });
  it('gammaFunction does this thing...', () => {
    expect(gammaFunction(1)).toBe(1);
  });
  it('gammaFunction gives error at zero', () => {
    expect(()=>gammaFunction(0)).toThrow();
  });

});
