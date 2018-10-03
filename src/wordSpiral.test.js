import { wordSpiral } from './wordSpiral';

describe('wordSpiral', () => {
  it('Works with a simple input!', () => {
    expect(wordSpiral('adbbeb')).toEqual([
        '  bbb',
        '  e b',
        'adedd',
        '  e  ',
        '  e  ',
        '  ebb',
    ]);
  });

  it('Works with the alphabet!', () => {
    expect(wordSpiral('abcdefghijklmnopqrstuvwxyz')).toEqual([
        'xxxxxxxxxxxxxxxxxxxxxxxxw  ',
        'y                       w  ',
        'y tttttttttttttttttttts w  ',
        'y u                   s w  ',
        'y u ppppppppppppppppo s w  ',
        'y u q               o s w  ',
        'y u q llllllllllllk o s w  ',
        'y u q m           k o s w  ',
        'y u q m hhhhhhhhg k o s w  ',
        'y u q m i       g k o s w  ',
        'y u q m i ddddc g k o s w  ',
        'y u q m i e   c g k o s w  ',
        'y u q m i e   c g k o s w  ',
        'y u q m i e abb g k o s w  ',
        'y u q m i e     g k o s w  ',
        'y u q m i effffff k o s w  ',
        'y u q m i         k o s w  ',
        'y u q m ijjjjjjjjjj o s w  ',
        'y u q m             o s w  ',
        'y u q mnnnnnnnnnnnnnn s w  ',
        'y u q                 s w  ',
        'y u qrrrrrrrrrrrrrrrrrr w  ',
        'y u                     w  ',
        'y uvvvvvvvvvvvvvvvvvvvvvv  ',
        'y                          ',
        'yzzzzzzzzzzzzzzzzzzzzzzzzzz',
    ]);
  });

  it('Works with its name!', () => {
    expect(wordSpiral('wordspiral')).toEqual([
        'w                           ',
        'w                           ',
        'w                           ',
        'w                           ',
        'w          ddddr            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w          s   r            ',
        'w        rrrrrrrrrrrrrrrrrri',
        'w        allllllllllll     i',
        'w          s   r           i',
        'w          s   r           i',
        'w          s   r           i',
        'w          s   r           i',
        'w          s   r           i',
        'w          s   r           i',
        'woooooooooosoooo           i',
        '           spppppppppppppppp',
    ]);
  });
})
