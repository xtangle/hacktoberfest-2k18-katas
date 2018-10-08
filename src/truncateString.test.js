import { truncateString } from './truncateString';

describe('alternatingSums', () => {
  it('should work without and index', () => {
    expect(truncateString('We are doing JS string exercises.')).toEqual('We are doing JS string exercises.');
  });

  it('should work with an index', () => {
    expect(truncateString('We are doing JS string exercises.', 19)).toEqual('We are doing JS ...');

  });

  it('should work with a terminating string', () => {
    expect(truncateString('We are doing JS string exercises.',15,'!!')).toEqual('We are doing !!');
  });
});
