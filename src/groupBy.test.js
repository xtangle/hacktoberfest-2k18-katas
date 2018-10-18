import { groupBy } from './groupBy';

describe('groupBy', () => {
  const isEven = number => number % 2 === 0;
  const parity = number => isEven(number) ? 'even' : 'odd';
  const  isPrime = number => {
    if (number < 2) {
      return false;
    }
    var divisor = 2;
    for(; number % divisor !== 0; divisor++);
    return divisor === number;
  };
  const prime = number => isPrime(number) ? 'prime' : 'divisible';
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('works with arrays', () => {
    expect(groupBy(numbers, parity)).toEqual({
      odd: [1, 3, 5, 7, 9],
      even: [2, 4, 6, 8]
    });
  });

  it('works without grouping criteria', () => {
    expect(groupBy(numbers)).toEqual({
      undefined: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
  });

  it('works with multilevel grouping', () => {
    expect(groupBy(numbers, parity, prime)).toEqual({
      odd: {
        prime: [3, 5, 7],
        divisible: [1, 9],
      },
      even: {
        prime: [2],
        divisible: [4, 6, 8]
      }
    });
  });

  it('works when there is no data', () => {
    expect(groupBy()).toEqual({});
  });
});
