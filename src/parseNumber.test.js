import { parseNumber } from './parseNumber';

describe('parseNumber', () => {
  it('parse positve number', () => {
    expect(parseNumber('1234')).toEqual(1234);
  });

  it('parse negative number', () => {
    expect(parseNumber('-1234')).toEqual(-1234);
  });
})