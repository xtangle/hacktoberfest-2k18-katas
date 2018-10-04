import {slug} from './slug';

describe('slug', () => {
  it('takes a string and replaces spaces ( ) with underscores (_)', () => {
    expect(slug('Slug my string!')).toEqual('Slug_my_string!');
    expect(slug('slug my string !')).toEqual('slug_my_string_!');
    expect(slug('slug    my  string')).toEqual('slug___my__string');
  });

  it('trims strings before sluggifying'), () => {
    expect(slug('   s')).toEqual('s');
    expect(slug('$    ')).toEqual('$');
    expect(slug('     world     ')).toEqual('world');
    expect(slug('   happy birthday   ! ')).toEqual('happy_birthday__!');
  }
})