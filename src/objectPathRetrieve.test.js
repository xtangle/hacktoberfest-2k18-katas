import { objectPathRetrieve } from './objectPathRetrieve';

describe('objectPathRetrieve', () => {
  it('retrieves values when object path given is flat', () => {
    const obj = { hello: 'world', end: '!!!' };
    expect(objectPathRetrieve(obj, 'end')).toEqual('!!!');
    expect(objectPathRetrieve(obj, 'hello')).toEqual('world');
  });

  it('retrieves values when object path given is nested', () => {
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
    expect(objectPathRetrieve(obj, 'name.firstName')).toEqual('Foo');
    expect(objectPathRetrieve(obj, 'name.lastName')).toEqual('Bar');
    expect(objectPathRetrieve(obj, 'details.address')).toStrictEqual({
      house: '20',
      street: '1st Street',
    });
    expect(objectPathRetrieve(obj, 'details.address.house')).toEqual('20');
  });

  it('throws error when object is not an object', () => {
    expect(() => objectPathRetrieve([1, 2, 3])).toThrow();
    expect(() => objectPathRetrieve(1)).toThrow();
    expect(() => objectPathRetrieve('String')).toThrow();
    expect(() => objectPathRetrieve(null)).toThrow();
  });

  it('throws error when object is not specified', () => {
    expect(() => objectPathRetrieve()).toThrow();
  });

  it('throws error when path is not specified', () => {
    const obj = { hello: 'world', end: '!!!' };
    expect(() => objectPathRetrieve(obj)).toThrow();
  });

  it('throws error when path is not found', () => {
    const obj = { hello: 'world', end: '!!!' };
    expect(() => objectPathRetrieve(obj, 'foo')).toThrow();
  });
})