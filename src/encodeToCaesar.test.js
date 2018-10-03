import { encodeToCaesar } from './encodeToCaesar';

describe('encodeToCaesar', () => {
  it('hello world', () => {
    expect(encodeToCaesar('hello world', 3)).toEqual('khoor zruog');
  });

  it('caesar cipher is cool', () => {
    expect(encodeToCaesar('caesar cipher is cool', 5)).toEqual('hfjxfw hnumjw nx httq');
  });
})
