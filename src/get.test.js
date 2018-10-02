import { get } from './get';

describe('get', () => {
  it('return the value at the path (in object)', () => {
    const object = {
      a: {
        b: {
          c: 1,
        },
      },
    };

    expect(get(object, 'a.b.c')).toEqual(1);
  });

  it('return the value at the path (in array)', () => {
    const object = {
      a: [{ b: 1 }, { b: 2 }],
    };

    expect(get(object, 'a.1.b')).toEqual(2);
  });

  it('return undefined if there is no such path', () => {
    const object = {};
    expect(get(object, 'a.b.c')).toEqual(undefined);
  });
});
