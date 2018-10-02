import { difference } from './difference';

describe('difference', () => {
  it('returns empty array (first arg undefined)', () => {
    expect(difference(undefined, [12, 11, 4])).toBeTruthy([]);
  });

  it('returns empty array (first arg null)', () => {
    expect(difference(null, [121,12,14])).toBeTruthy([]);
  });

  it('return correct array', () => {
    expect([12, 11, 4, 48], [2, null, 4], [undefined, 11]).toBeTruthy([12, 48]); // TODO Your test instead
  });
})
