import { runBrainfuck } from './runBrainfuck';

describe('runBrainfuck', () => {
  it('Runs basic Brainfuck programs', () => {
    expect(runBrainfuck('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+.')).toEqual('HI');
    expect(runBrainfuck('+++++++++++++++++++++++++++++++++++++++++++++++++++++.-.-.-.-.')).toEqual('54321');
  });

  it('Can handle input as a secondary argument', () => {
    expect(runBrainfuck(',.', 'A')).toEqual('A');
    expect(runBrainfuck(',>,>,>,>,.<.<.<.<.', 'olleH')).toEqual('Hello');
  });

  it('Can handle more complex programs with loops', () => {
    expect(runBrainfuck('++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.')).toEqual('Hello World!');
  });
});
