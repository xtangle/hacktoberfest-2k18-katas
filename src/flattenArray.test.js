import { flattenArray } from './flattenArray';

describe('flattenArray', () => {
  it('flattenArray func. to parse single nesting as follows', () => {
    expect(flattenArray('[1,[2],3]')).toEqual('[1,2,3]');
  });

  it('flattenArray func. to parse double nesting as follows', () => {
    expect(flattenArray('[1,[2, [3]],4]')).toEqual('[1,2,[3],4]');
  });

  it('flattenArray func. to not return same value as input', () => {
    expect(flattenArray('[1,[2],3]')).not.toBe('[1,[2],3]')
  });
});
