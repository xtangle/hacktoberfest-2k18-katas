import { isLink } from './isLink';

describe('isLink', () => {
  it('test www.google.com', () => {
    expect(isLink("www.google.com")).toBeTruthy();
  });

  it('testme is not valid link', () => {
    expect(isLink("testme")).toBeFalsy();
  });
})
