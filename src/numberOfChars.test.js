import { numberOfChars} from './numberOfChars';

describe('Number of Chars in a given String', () => {
    it('should return the number of the  characters in a given string.', () => {
      expect(numberOfChars("hello world")).toEqual(11);
      expect(numberOfChars("this is a sample string to check")).toEqual(32);
      expect(() => numberOfChars('-')).toThrow();
  
    });
  });
  