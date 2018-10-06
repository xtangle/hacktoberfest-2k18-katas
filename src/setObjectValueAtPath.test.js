import { setObjectValueAtPath } from './setObjectValueAtPath';

describe('setObjectValueAtPath', () => {
  it('should override value at existing flat path', () => {
    const value = 'newValue';
    const obj = {
        foo: {
            nested: 'value1',
        },
        bar: 'value2',
    };
    const expected = {
        foo: {
            nested: 'value1',
        },
        bar: value,
    }
    setObjectValueAtPath(obj, 'bar', 'newValue');
    expect(obj).toEqual(expected);
  });

  it('should override value at existing nested path', () => {
    const value = 'newValue';
    const obj = {
        foo: {
            nested: 'value1',
        },
        bar: 'value2',
    };
    const expected = {
        foo: {
            nested: value,
        },
        bar: 'value2',
    }
    setObjectValueAtPath(obj, 'foo.nested', 'newValue');
    expect(obj).toEqual(expected);
  });

  it('should create missing object structure', () => {
    const obj = {
        foo: {
            nested: 'value1',
        },
        bar: 'value2',
    };
    const expected = {
      foo: {
          nested: 'value1',
          another: 'newValue1',
      },
      bar: 'value2',
      newKey: 'newValue2',
      some: {
        complex: {
          path: 'newValue3',
        },
      },
    };
    setObjectValueAtPath(obj, 'foo.another', 'newValue1');
    setObjectValueAtPath(obj, 'newKey', 'newValue2');
    setObjectValueAtPath(obj, 'some.complex.path', 'newValue3');
    expect(obj).toEqual(expected);
  });

  it('should throw if object is not specified', () => {
    expect(() => { setObjectValueAtPath(undefined, 'some.path'); }).toThrow();
  });

  it('should throw if path is not specified', () => {
    expect(() => { setObjectValueAtPath({}); }).toThrow();
  });
});
