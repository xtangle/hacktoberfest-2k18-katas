import { startsWith } from './startsWith';

describe('startsWith', () => {
  it('"123abc" starts with "123", returns true', () => {
    expect(startsWith("123abc", "123")).toBeTruthy();
  });

  it('"xyzabc" does not start with "xya", returns false', () => {
    expect(startsWith("xyzabc", "xya")).toBeFalsy()
  });
})