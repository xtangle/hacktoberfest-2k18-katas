import { unblockIt } from './unblockIt';

describe('unblockIt', () => {
  it('Return fastest steps to solve the puzzle', () => {
    let puzzle = [
      '      ',
      'AA B  ',
      'XX B  ',
      'C  B  ',
      'C     ',
      'CDDD  '
    ]

    let answer = [
      [
        '      ',
        'AA B  ',
        ' XXB  ',
        'C  B  ',
        'C     ',
        'CDDD  '
      ],
      [
        '      ',
        'AA B  ',
        'CXXB  ',
        'C  B  ',
        'C     ',
        ' DDD  '
      ],
      [
        '      ',
        'AA B  ',
        'CXXB  ',
        'C  B  ',
        'C     ',
        'DDD   '
      ],
      [
        '      ',
        'AA    ',
        'CXX   ',
        'C  B  ',
        'C  B  ',
        'DDDB  '
      ],
      [
        '      ',
        'AA    ',
        'C   XX',
        'C  B  ',
        'C  B  ',
        'DDDB  '
      ]
    ]

    expect(unblockIt(puzzle)).toEqual(answer)
  })
});
