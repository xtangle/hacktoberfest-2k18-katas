import { humanizeNumber } from './humanizeNumber';

describe('humanizeNumber', () => {
  it('should humanize the following numbers as such', () => {
    expect(humanizeNumber(301)).toEqual('301st');
    expect(humanizeNumber('301')).toEqual('301st');
    expect(humanizeNumber(30)).toEqual('30th');
    expect(humanizeNumber(32)).toEqual('32nd');
    expect(humanizeNumber('1093')).toEqual('1093rd');
  });

  it('should not accept invalid parameters', () => {
    expect(() => humanizeNumber([])).toThrow();
    expect(() => humanizeNumber({})).toThrow();
    expect(() => humanizeNumber(null)).toThrow();
});
});
