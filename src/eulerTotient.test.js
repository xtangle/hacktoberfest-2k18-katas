import { eulerTotient } from './eulerTotient';

describe('eulerTotient', () => {
  it('finds the value of phi(n)', () => {
    expect(eulerTotient(11)).toEqual(10);
    expect(eulerTotient(1000000007)).toEqual(1000000006);
    expect(eulerTotient(12)).toEqual(4);
    expect(eulerTotient(10000)).toEqual(4000);
  });

  it('rejects invalid numbers', () => {
    expect(eulerTotient(-1)).toThrow();
  });

  it('rejects non numbers', () => {
    expect(eulerTotient(null)).toThrow();
    expect(eulerTotient([])).toThrow();
    expect(eulerTotient({})).toThrow();
  });
});
