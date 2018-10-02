import { greet } from './greet';

describe('greet', () => {
  it('should greet a valid name', () => {
    expect(greet('Igor')).toBe('Hi, Igor! Nice to meet you :)');
  });

  it('should not greet names that are not strings', () => {
    expect(greet({not: 'someone'})).toBe('What a curious name!');
    expect(greet(231)).toBe('What a curious name!');
    expect(greet(() => {})).toBe('What a curious name!');
  });
})