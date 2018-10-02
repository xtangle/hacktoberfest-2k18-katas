import { omit } from './omit';

describe('omit', () => {
  it('removes an unwanted property from an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, c: 3 };

    expect(omit(object, ['b'])).toEqual(expected);
  });

  it('removes all unwanted properties from an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const expected = { a: 1 };

    expect(omit(object, ['b', 'c'])).toEqual(expected);
  });

  it('removes nothing when no property is passed', () => {
    const object = { a: 1, b: 2, c: 3 };

    expect(omit(object, [])).toEqual(object);
    expect(omit(object)).toEqual(object);
  });
});
