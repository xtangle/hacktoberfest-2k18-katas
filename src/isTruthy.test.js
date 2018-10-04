import { isTruthy } from './isTruthy';

describe('isTruthy', () => {
  it('evaluates 0 as falsy', () => {
    expect(isTruthy(0)).toBe(false);
  });

  it('evaluates 1 as truthy', () => {
    expect(isTruthy(1)).toBe(true);
  });

  it('evaluates true as truthy', () => {
    expect(isTruthy(true)).toBe(true);
  });

  it('evaluates false as truthy', () => {
    expect(isTruthy(false)).toBe(false);
  });

  it('evaluates "0" as truthy', () => {
    expect(isTruthy('0')).toBe(true);
  });

  it('evaluates null as falsy', () => {
    expect(isTruthy(null)).toBe(false);
  });

  it('evaluates undefined as falsy', () => {
    expect(isTruthy(undefined)).toBe(false);
  });
});
