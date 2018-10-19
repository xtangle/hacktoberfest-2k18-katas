import { vectorProjection } from './vectorProjection';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(theFunction()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(theFunction()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(theFunction()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(theFunction()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { theFunction(); }).toThrow();
 */

describe('vectorProjection', () => {
  it('returns the correct answer for two number inputs', () => {
    expect(vectorProjection({projectedVector: 3, basisVector: 1})).toEqual(1);
  });

  it('returns the correct answer for two dimensional vectors in array form', () => {
    expect(vectorProjection({projectedVector: [2, 4], basisVector: [-1,5]})).toEqual([1.8, 3.6]);
  });

  it('returns the correct answer for two dimensional vectors in set form', () => {
    expect(vectorProjection({projectedVector: new Set([2, 4]), basisVector: new Set([-1,5])})).toEqual([1.8, 3.6]);
  });

  it('returns the correct answer for 3 dimensional vectors in array form', () => {
    expect(vectorProjection({projectedVector: [1, 0, 3], basisVector: [-1,4,2]})).toEqual([0.5,0,1.5]);
  });

  it('throws an error for two vectors with different dimensions', () => {
    expect(() => vectorProjection({projectedVector: [2, 4, -7], basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when the basisVector is not included as a parameter', () => {
    expect(() => vectorProjection({projectedVector: [2, 4, -7]})).toThrow();
  });

  it('throws an error when the projectedVector is not included as a parameter', () => {
    expect(() => vectorProjection({basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when a vector input is a string', () => {
    expect(() => vectorProjection({projectedVector: 'magnitude and direction!', basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when a vector input is an object', () => {
    expect(() => vectorProjection({projectedVector: {vector: [1,2]}, basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when a vector input is a function', () => {
    expect(() => vectorProjection({projectedVector: () => {return [1,2]}, basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when a vector input is a boolean', () => {
    expect(() => vectorProjection({projectedVector: false, basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when a vector input is a NaN', () => {
    expect(() => vectorProjection({projectedVector: NaN, basisVector: [-1,5]})).toThrow();
  });

  it('throws an error when a vector input is null', () => {
    expect(() => vectorProjection({projectedVector: null, basisVector: [-1,5]})).toThrow();
  });
});
