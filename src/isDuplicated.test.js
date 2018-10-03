import { isDuplicated } from './isDuplicated';

describe('isDuplicated', () => {
  it('duplicated', () => {
    expect(isDuplicated('hello world', 'l')).toEqual(true);
  });

  it('not duplicated', () => {
    expect(isDuplicated('caesar cipher is cool', 'h')).toEqual(false);
  });
})
