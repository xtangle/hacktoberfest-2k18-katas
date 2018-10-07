import { deleteObjectKeyAtPath } from './deleteObjectKeyAtPath';

describe('deleteObjectKeyAtPath', () => {
  it('deletes keys when object path given is flat', () => {
    const obj = { hello: 'world', end: '!!!' };
    expect(deleteObjectKeyAtPath(obj, 'end')).toStrictEqual({ hello: 'world' });
  });

  it('deletes keys when object path given is the only key', () => {
    const obj = { hello: 'world' };
    expect(deleteObjectKeyAtPath(obj, 'hello')).toStrictEqual({});
  });

  it('deletes keys when object path given is nested', () => {
    const obj = {
      name: {
        firstName: 'Foo',
        lastName: 'Bar',
      },
      details: {
        address: {
          house: '20',
          street: '1st Street',
        },
      },
    };
    const expected = {
      name: {
        firstName: 'Foo',
      },
      details: {},      
    }
    deleteObjectKeyAtPath(obj, 'name.lastName');
    deleteObjectKeyAtPath(obj, 'details.address');
    expect(obj).toStrictEqual(expected);
  });

  it('throws error when object is not an object', () => {
    expect(() => deleteObjectKeyAtPath([1, 2, 3])).toThrow();
    expect(() => deleteObjectKeyAtPath(1)).toThrow();
    expect(() => deleteObjectKeyAtPath('String')).toThrow();
    expect(() => deleteObjectKeyAtPath(null)).toThrow();
  });

  it('throws error when object is not specified', () => {
    expect(() => deleteObjectKeyAtPath()).toThrow();
  });

  it('throws error when path is not specified', () => {
    const obj = { hello: 'world', end: '!!!' };
    expect(() => deleteObjectKeyAtPath(obj)).toThrow();
  });

  it('throws error when path is not found', () => {
    const obj = { hello: 'world', end: '!!!' };
    expect(() => deleteObjectKeyAtPath(obj, 'foo')).toThrow();
  });
});
