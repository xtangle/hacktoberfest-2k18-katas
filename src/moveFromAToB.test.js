import { moveFromAToB } from './moveFromAToB';

describe('moveFromAToB', () => {
  it('is falsy when there is path', () => {
    const map = [
      '  A       ',
      '          ',
      '##########',
      '          ',
      '      B   ',
    ];

    expect(moveFromAToB(map)).toBeFalsy();
  });

  it('is truthy when there is a simple path', () => {
    const map = [
      '  A       ',
      '          ',
      '##### ####',
      '          ',
      '      B   ',
    ];

    expect(moveFromAToB(map)).toBeTruthy();
  });

  it('is truthy when there is a convoluted path', () => {
    const map = [
      'A#   #   #',
      ' # # # # #',
      '   #   #  ',
      '######### ',
      'B         ',
    ];

    expect(moveFromAToB(map)).toBeTruthy();
  });
});
