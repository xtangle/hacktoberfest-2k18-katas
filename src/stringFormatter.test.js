import { stringFormatter } from './stringFormatter';

describe('stringFormatter', () => {
  it('returns the formatted string with arguments as string', () => {
    expect(stringFormatter('Hello {0}!!!', 'World')).toStrictEqual('Hello World!!!');
    expect(stringFormatter('Hey, {0} can {1} strings', 'I', 'format')).toStrictEqual('Hey, I can format strings');
  });

  it('returns the formatted string with arguments both string and number', () => {
    expect(stringFormatter('{0} + {1} = {2}', 3, '1.5', 4.5)).toStrictEqual('3 + 1.5 = 4.5');
  });

  it('returns the string without format specifiers incase of no or null arguments', () => {
    expect(stringFormatter('Hey {0} am {1}')).toStrictEqual('Hey am');
    expect(stringFormatter('Hey {0} am {1}', 'there')).toStrictEqual('Hey there am');
    expect(stringFormatter('Hey {0} am {1}', 'there', null)).toStrictEqual('Hey there am');
  });

  it('throws error when format is not a string', () => {
    expect(() => stringFormatter()).toThrow();
    expect(() => stringFormatter(null, 3, 4)).toThrow();
    expect(() => stringFormatter(NaN)).toThrow();
    expect(() => stringFormatter({})).toThrow();
    expect(() => stringFormatter([])).toThrow();
    expect(() => stringFormatter(3, 2, '3')).toThrow();
  });

  it('throws error when all the arguments are not string or number', () => {
    expect(() => stringFormatter('Hello {0}', 3, NaN)).toThrow();
    expect(() => stringFormatter('Hello {0}', {}, 4)).toThrow();
    expect(() => stringFormatter('Hello {0}', [])).toThrow();
    expect(() => stringFormatter('Hello {0}', NaN)).toThrow();
  });
});
