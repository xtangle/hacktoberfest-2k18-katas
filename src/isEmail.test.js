import { isEmail } from './isEmail';

describe('isEmail', () => {
  it('test@gmail.com is valid email', () => {
    expect(isEmail("test@gmail.com")).toBeTruthy();
  });

  it('test@gmailm is not valid email', () => {
    expect(isEmail("test@gmail")).toBeFalsy();
  });
})
