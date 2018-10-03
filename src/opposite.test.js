import { opposite } from './opposite';

describe('opposite', () => {
  it('return -1', () => {
    expect(opposite(1)).toEqual(-1);
  });
  it('return 2', () => {
    expect(opposite(-2)).toEqual(2);
  });

});
