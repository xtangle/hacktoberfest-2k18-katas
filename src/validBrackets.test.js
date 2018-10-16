import { validBrackets } from './validBrackets';

describe('validBrackets', () => {
  it('the expression "" should be "VALID"', () => {
    expect(validBrackets("")).toEqual('VALID');
  });

  it('the expression "123abc" should be "VALID"', () => {
    expect(validBrackets("123abc")).toEqual('VALID');
  });

  it('the expression "2*(2+1)/2" should be "VALID"', () => {
    expect(validBrackets("2*(2+1)/2")).toEqual('VALID');
  });

  it('the expression "2*{(2+1)+2}/2" should be "VALID"', () => {
    expect(validBrackets("2*{(2+1)+2}/2")).toEqual('VALID');
  });

  it('the expression "abc{[(123)def]456}ghi" should be "VALID"', () => {
    expect(validBrackets("abc{[(123)def]456}ghi")).toEqual('VALID');
  });

  it('the expression "({[]}())()[]{()}" should be "VALID"', () => {
    expect(validBrackets("({[]}())()[]{()}")).toEqual('VALID');
  });

  it('the expression "a[]([b]{c})[d]((e))" should be "VALID"', () => {
    expect(validBrackets("a[]([b]{c})[d]((e))")).toEqual('VALID');
  });

  it('the expression "{{)}" should be "INVALID"', () => {
    expect(validBrackets("{{)}")).toEqual('INVALID');
  });

  it('the expression "][" should be "INVALID"', () => {
    expect(validBrackets("][")).toEqual('INVALID');
  });

  it('the expression "((())" should be "INVALID"', () => {
    expect(validBrackets("((())")).toEqual('INVALID');
  });

  it('the expression "{}}" should be "INVALID"', () => {
    expect(validBrackets("{}}")).toEqual('INVALID');
  });

  it('the expression "{[(])}" should be "INVALID"', () => {
    expect(validBrackets("{[(])}")).toEqual('INVALID');
  });

  it('the expression "(a]" should be "INVALID"', () => {
    expect(validBrackets("(a]")).toEqual('INVALID');
  });

  it('the expression "abc{def[123}456]..." should be "INVALID"', () => {
    expect(validBrackets("abc{def[123}456]...")).toEqual('INVALID');
  });
});
