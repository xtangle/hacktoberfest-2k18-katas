import { pow } from './pow';

describe('pow', () => {
  it('should calculate power for 2 correctly', () => {
    expect(pow(2, 2)).toEqual(4);
  });

  it('should calculate negative pow', () => {
    expect(pow(2, -2)).toEqual(0.25);
  });
});
