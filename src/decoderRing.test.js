import { decoderRing } from './decoderRing';

describe('decoderRing', () => {
  it('returns Falsy when given an empty string', () => {
    expect((decoderRing())).toBeFalsy()
  });

  it('returns a string when given a string and a number', () => {
    expect((decoderRing('hacktoberfest', 13)).toEqual('15E1018211C1F13122021'))
  });

  it('returns a string when given a string and 0', () => {
    expect((decoderRing('hacktoberfest', 0)).toEqual('813B14F2512651314'))
  });
});
