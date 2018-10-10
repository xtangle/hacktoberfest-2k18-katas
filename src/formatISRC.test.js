import { formatISRC } from './formatISRC';

describe('formatISRC', () => {
  it ('should convert string to ISRC format', () => {
    expect(formatISRC('USRC17607839')).toEqual('US-RC1-76-07839');
  });

  it ('should return the value if the value has no replace property', () => {
    expect(formatISRC(1)).toEqual(1);
  });
});
