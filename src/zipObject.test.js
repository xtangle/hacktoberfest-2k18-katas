import { zipObject } from './zipObject';

describe('zipObject', () => {
  it('zipObject combines keys and values', () => {
      let keys = ['a', 'b', 'c']
      let values = [1, 2, 3]
      let result = {"a": 1, "b": 2, "c": 3}

      expect(zipObject(matrix)).toEqual(result);
  });

  it('zipObject handles shorter value array', () => {
      let keys = ['a', 'b', 'c']
      let values = [1, 2]
      let result = {"a": 1, "b": 2, "c": undefined}

      expect(zipObject(matrix)).toEqual(result);
  });

  it('zipObject handles longer value array', () => {
      let keys = ['a', 'b', 'c']
      let values = [1, 2, 3, 4]
      let result = {"a": 1, "b": 2, "c": 3}

      expect(zipObject(matrix)).toEqual(result);
  });
});
