import { padEnd } from './padEnd';

describe('padEnd', () => {
  it('pads the string with spaces at the end with no padding string given', () => {
    expect(padEnd('test', 8)).toEqual('test    '); // TODO Your test instead
  });

  it('pads the string with padding character at the end', () => {
    expect(padEnd('test', 8, '@')).toEqual('test@@@@'); // TODO Your test instead
  });

  it('pads the string with padding string at the end', () => {
    expect(padEnd('test', 9, '@|')).toEqual('test@|@|@'); // TODO Your test instead
  });

  it('pads the string with length same as length of given string', () => {
    expect(padEnd('test', 4, '|')).toEqual('test'); // TODO Your test instead
  });

  it('returns null when length is not number', () => {
    expect(padEnd('test', 'asdf', '|')).toEqual(null); // TODO Your test instead
    expect(padEnd('test', null, '|')).toEqual(null); // TODO Your test instead
    expect(padEnd('test', undefined, '|')).toEqual(null); // TODO Your test instead
    expect(padEnd('test', [], '|')).toEqual(null); // TODO Your test instead
    expect(padEnd('test', {}, '|')).toEqual(null); // TODO Your test instead
  });

  it('returns null when string is not given', () => {
    expect(padEnd(null, 8, '|')).toEqual(null); // TODO Your test instead
    expect(padEnd(undefined, 8, '|')).toEqual(null); // TODO Your test instead
    expect(padEnd([], 8, '|')).toEqual(null); // TODO Your test instead
    expect(padEnd({}, 8, '|')).toEqual(null); // TODO Your test instead
    expect(padEnd(100, 8, '|')).toEqual(null); // TODO Your test instead
  });
})