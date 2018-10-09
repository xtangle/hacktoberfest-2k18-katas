import { swapKeysAndValues } from './swapKeysAndValues';

describe('swapKeysAndValues', () => {
  it('swapKeysAndValues swaps integers', () => {
    expect(swapKeysAndValues({
        1: 2,
        3: 4,
        5: 6,
        7: 8,
    }))
    .toEqual({
        2: 1,
        4: 3,
        6: 5,
        8: 7,
    });
  });

  it('swapKeysAndValues swaps strings', () => {
        expect(swapKeysAndValues({
        'this': 'is',
        'a': 'test',
    }))
    .toEqual({
        'is': 'this',
        'test': 'a',
    });
  });
});
