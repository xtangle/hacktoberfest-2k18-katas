import { diceRoll } from './diceRoll';

describe('diceRoll', () => {
  it('diceRoll does this thing...', () => {
    assertInRange(diceRoll(6), [1, 6]);
  });

  it('diceRoll does this thing...', () => {
    assertInRange(diceRoll(3), [1, 3]);
  });

  it('diceRoll does this thing...', () => {
    assertInRange(diceRoll(20), [1, 20]);
  });
});

function assertInRange(n, [min, max]) {
  expect(n).toBeGreaterThanOrEqual(min);
  expect(n).toBeLessThanOrEqual(max);
}
