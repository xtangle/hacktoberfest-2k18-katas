import { isEmail } from './isEmail';

describe('isEmail', () => {
  it('test@gmail.com is valid email', () => {
    expect(isEmail("test@gmail.com")).toBeTruthy(); // TODO Your test instead
  });

  it('test@gmailm is not valid email', () => {
    expect(isEmail("test@gmail")).toBeTruthy(); // TODO Your test instead
  });
})
